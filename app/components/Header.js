"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => {
    if (href.includes("#")) return false;
    return href === "/" ? path === "/" : path.startsWith(href);
  };

  useEffect(() => setOpen(false), [path]);

  return (
    <header>
      <Link className="wordmark" href="/" aria-label="Block 3 — home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/block3-logo.jpg" alt="Block 3" className="brand-logo" />
      </Link>

      <nav className="main" aria-label="Primary">
        {NAV.map((n) => (
          <Link key={n.label} href={n.href} className={isActive(n.href) ? "active" : ""}>
            {n.label}
          </Link>
        ))}
        <button className="search" aria-label="Search" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>
        <Link className="archive" href="/">Archive</Link>
      </nav>

      <button className={`burger-btn ${open ? "x" : ""}`} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <i /><i /><i />
      </button>

      {open && (
        <div className="m-menu">
          {[...NAV, { label: "Archive", href: "/" }].map((n) => (
            <Link key={n.label} href={n.href}>{n.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
