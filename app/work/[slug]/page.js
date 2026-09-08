import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/app/data/projects";
import ProjectDetail from "@/app/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  return { title: p ? p.title : "Pentagram" };
}

export default function ProjectPage({ params }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const related = PROJECTS.filter((x) => x.id !== p.id).slice(0, 3);

  return <ProjectDetail project={p} related={related} />;
}
