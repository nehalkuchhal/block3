import Art from "./Art";

// Renders a real cover image when the project has `thumb`, otherwise the CSS artwork.
export default function Thumb({ project }) {
  if (project.thumb) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="art art-img" src={project.thumb} alt={project.title} />;
  }
  return <Art kind={project.art} />;
}
