import Link from "next/link";
import { PROJECTS } from "@/app/data/projects";
import Thumb from "./Thumb";

const RAIL = ["toysun", "andaman", "solstice", "bloom", "atlas"];

export default function FeatureSection() {
  const items = RAIL.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);

  return (
    <section className="feature">
      <div className="feature-inner">
        <h2 className="feature-title">Our Ideas Are Meant to Exist</h2>

        <div className="manifesto">
          <p>
            We believe the best ideas are the ones that refuse to stay ideas. The ones that start as a
            thought, a scribble, a conversation at an unreasonable hour.
          </p>
          <p>
            We think, build, write, design and create across brands, identities, social media and stories,
            bringing different disciplines together without putting creativity inside neat little boxes.
          </p>
          <p>And while we may not know exactly where every idea will take us, we know one thing:</p>
          <p className="manifesto-punch">Ideas not executed are just hallucinations.</p>
        </div>

        <div className="feature-rail">
          {items.map((p) => (
            <Link key={p.id} href={`/work/${p.id}`} className="frame">
              <div className="frame-thumb">
                <Thumb project={p} />
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
