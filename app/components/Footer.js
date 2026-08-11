import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="fbrand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/block3-logo.jpg" alt="Block 3" className="brand-logo" />
      </div>
      <div className="fcol">
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <div className="fspace" />
      <div className="fcol">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">X</a>
        <a href="#">Newsletter</a>
      </div>
      <div className="fnote">© 2026 Pentagram Design — recreation for study. Not affiliated with Pentagram.</div>
    </footer>
  );
}
