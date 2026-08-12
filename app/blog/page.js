import Link from "next/link";
import { NEWS } from "@/app/data/projects";

export const metadata = { title: "Blog — Block 3" };

export default function BlogPage() {
  return (
    <div className="page">
      <div className="eyebrow">Blog</div>
      <h1>Stories from the studio.</h1>
      <p className="lede">New work, thinking and talks.</p>

      <div className="news-list">
        {NEWS.map((n) => (
          <Link className="news-item" href={`/work/${n.ref}`} key={n.title}>
            <div className="date">{n.date}</div>
            <h3>{n.title}</h3>
            <div className="kind">{n.kind}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
