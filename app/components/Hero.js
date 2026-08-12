"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/app/data/projects";
import Thumb from "./Thumb";

const SLIDES = PROJECTS.slice(0, 8);
const INTERVAL = 3400;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const cur = SLIDES[i];

  return (
    <section
      className="hero"
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
            <Thumb project={p} />
          </div>
        ))}

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
  );
}
