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
        <Link href="/blog">Blog</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <div className="fspace" />
      <div className="fcol">
        <a href="https://www.instagram.com/block3_studio/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
      <div className="fnote">© 2026 Block 3. All rights reserved.</div>
    </footer>
  );
}
