"use client";

import { useState } from "react";
import Link from "next/link";
import Art from "./Art";
import Thumb from "./Thumb";

const SECTOR = {
  andaman: "Travel & Hospitality", toysun: "Fashion & Beauty", meridian: "Finance", verso: "Arts & Culture", solstice: "Arts & Culture",
  review: "Media", atlas: "Technology", kinfolk: "Food & Drink",
  northbound: "Transport", serif: "Arts & Culture", bloom: "Retail",
  harbor: "Industry", field: "Media", cassette: "Technology",
};
const OFFICE = {
  andaman: "New Delhi", toysun: "New Delhi", meridian: "London", verso: "New York", solstice: "Berlin", review: "New York",
  atlas: "Austin", kinfolk: "London", northbound: "Berlin", serif: "London",
  bloom: "New York", harbor: "London", field: "Austin", cassette: "New York",
};
const TEAM = ["Kirstin Rocke-Huber", "Olivia Ray"];
const COLLAB = ["Izzy Henderson", "Elisa Penello", "Tammy Shell"];

function Cred({ label, children }) {
  return (
    <div className="c-item">
      <div className="c-label">{label}</div>
      <div className="c-val">{children}</div>
    </div>
  );
}

export default function ProjectDetail({ project, related }) {
  const [open, setOpen] = useState(false);

  const partner = (project.credits.find((c) => c[0] === "Partner") || [])[1] || "—";

  const [f0, f1] = project.figs || [];
  const blocks = [
    { type: "full", a: project.art },
    { type: "duo", a: f0, b: f1 },
    { type: "full", a: f0 },
    { type: "trio", a: project.art, b: f1, c: f0 },
    { type: "full", a: f1 },
  ];

  const renderBlock = (b, i) => {
    if (b.type === "duo")
      return (
        <div className="m-duo" key={i}>
          <div className="cell"><Art kind={b.a} /></div>
          <div className="cell"><Art kind={b.b} /></div>
        </div>
      );
    if (b.type === "trio")
      return (
        <div className="m-trio" key={i}>
          <div className="cell"><Art kind={b.a} /></div>
          <div className="cell"><Art kind={b.b} /></div>
          <div className="cell"><Art kind={b.c} /></div>
        </div>
      );
    return <div className="m-full" key={i}><Art kind={b.a} /></div>;
  };

  return (
    <article className="case">
      {/* toggle */}
      <button className="about-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>About the project</span>
        <span className="plus">{open ? "✕" : "+"}</span>
      </button>

      {/* intro */}
      <div className="case-intro">
        <h1 className="case-title">{project.title}</h1>
        <p className="case-desc">{project.desc}</p>
        <div className="case-tags">
          {project.tags.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
          <span className="chip">{SECTOR[project.id]}</span>
        </div>
      </div>

      {/* body: media (+ about panel when open) */}
      <div className={`case-layout ${open ? "open" : ""}`}>
        {project.images?.length ? (
          <div className="case-media raw">
            {project.images.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${project.title} — ${i + 1}`} loading={i < 2 ? "eager" : "lazy"} />
            ))}
          </div>
        ) : (
          <div className="case-media">{blocks.map(renderBlock)}</div>
        )}

        {open && (
          <aside className="about-panel">
            <div className="ap-body">
              <p>{project.lede}</p>
              <p>{project.p1}</p>
              <p>{project.p2}</p>
            </div>
            <div className="ap-credits">
              <div className="c-col">
                <Cred label="Client"><a href="#" className="c-link">{project.title}</a></Cred>
                <Cred label="Sector">{SECTOR[project.id]}</Cred>
                <Cred label="Discipline">
                  {project.tags.map((t, k) => (
                    <div key={t}>{t}</div>
                  ))}
                </Cred>
              </div>
              <div className="c-col">
                <Cred label="Office">{OFFICE[project.id]}</Cred>
                <Cred label="Partner"><a href="#" className="c-link">{partner}</a></Cred>
                <Cred label="Project team">
                  {TEAM.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </Cred>
                <Cred label="Collaborators">
                  {COLLAB.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </Cred>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* more projects */}
      <section className="more">
        <h2>More projects</h2>
        <div className="more-grid">
          {related.map((p) => (
            <Link key={p.id} href={`/work/${p.id}`} className="mcard">
              <div className="mthumb"><Thumb project={p} /></div>
              <div className="mtitle">{p.title}</div>
              <div className="mdesc">{p.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
