import Link from "next/link";
import { PROJECTS } from "@/app/data/projects";
import Art from "./Art";

const FOUR = ["solstice", "bloom", "atlas", "kinfolk"];

export default function FeatureSection() {
  const items = FOUR.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);

  return (
    <section className="feature">
      <div className="feature-inner">
        <h2 className="feature-title">Our Future is the Ultimate Project</h2>
        <p className="feature-lede">
          Deploying information design, branding, installations, and digital applications, Pentagram has
          partnered with groundbreaking environmental organizations around the world — public, private, and
          nonprofit — to confront the challenge of climate change. Addressing complex data and scientific
          concepts requires not just precision and rigor, but empathy and humanity. And in the face of urgency
          that can sometimes seem overwhelming, we must never forget the power of beauty, storytelling and,
          above all, optimism.
        </p>

        <div className="feature-rail">
          {items.map((p) => (
            <Link key={p.id} href={`/work/${p.id}`} className="frame">
              <div className="frame-thumb">
                <Art kind={p.art} />
              </div>
              <div className="frame-title">{p.title}</div>
              <div className="frame-desc">{p.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
