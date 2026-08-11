"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/app/data/projects";
import Art from "./Art";

const SLIDES = PROJECTS.slice(0, 8);
const INTERVAL = 3400;

const SECTOR = {
  toysun: "Fashion & Beauty", meridian: "Finance", verso: "Arts & Culture", solstice: "Arts & Culture",
  review: "Media", atlas: "Technology", kinfolk: "Food & Drink",
  northbound: "Transport", serif: "Arts & Culture", bloom: "Retail",
  harbor: "Industry", field: "Media", cassette: "Technology",
};
const disc = (p) => p.disc.split("·")[0].trim();

function Pill({ cur, fixed }) {
  return (
    <div className={`pill ${fixed ? "pill-fixed" : "pill-hero"}`} aria-hidden={false}>
      <span className="pill-lead">We design</span>
      <span className="pill-sel">
        {disc(cur)} <b className="caret">⌄</b>
      </span>
      <span className="pill-for">for</span>
      <span className="pill-sel">
        {SECTOR[cur.id] || "everyone"} <b className="caret">⌄</b>
      </span>
    </div>
  );
}

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const router = useRouter();
  const heroRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const onScroll = () => {
      const h = heroRef.current?.offsetHeight || window.innerHeight;
      setPinned(window.scrollY > h * 0.62);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cur = SLIDES[i];

  return (
    <>
      <section
        className="hero"
        ref={heroRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="hero-stage"
          role="link"
          tabIndex={0}
          onClick={() => router.push(`/work/${cur.id}`)}
          onKeyDown={(e) => e.key === "Enter" && router.push(`/work/${cur.id}`)}
          aria-label={`Open ${cur.title}`}
        >
          {SLIDES.map((p, idx) => (
            <div key={p.id} className={"layer" + (idx === i ? " on" : "")} aria-hidden={idx !== i}>
              <Art kind={p.art} />
            </div>
          ))}

          <Pill cur={cur} fixed={false} />

          <div className="hero-caption">
            <div className="hc-title">{cur.title}</div>
            <div className="hc-desc">{cur.desc}</div>
          </div>

          <div className="hero-dots" role="tablist" aria-label="Slides">
            {SLIDES.map((p, idx) => (
              <button
                key={p.id}
                className={idx === i ? "on" : ""}
                aria-label={p.title}
                onClick={(e) => {
                  e.stopPropagation();
                  setI(idx);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* pill detaches and sticks to bottom while scrolling */}
      <div className={`pill-dock ${pinned ? "show" : ""}`} aria-hidden={!pinned}>
        <Pill cur={cur} fixed />
      </div>
    </>
  );
}
