"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "@/app/data/projects";
import Art from "./Art";

// tall / short pattern to create the staggered masonry rhythm
const SIZE = ["tall", "short", "short", "tall", "tall", "short", "short", "tall", "tall", "short", "short", "tall"];

export default function ProjectGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".card") ?? [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      cards.forEach((c) => c.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="latest" id="work">
      <div className="latest-head">
        <span>See latest projects</span>
        <span className="arrow" aria-hidden="true">↓</span>
      </div>

      <div className="masonry" ref={ref}>
        {PROJECTS.slice(0, 5).map((p, idx) => (
          <Link key={p.id} href={`/work/${p.id}`} className={`card ${SIZE[idx % SIZE.length]}`}>
            <div className="thumb">
              <Art kind={p.art} />
            </div>
            <div className="meta">
              <div className="title">{p.title}</div>
              <div className="desc">{p.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
