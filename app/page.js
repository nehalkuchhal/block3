import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import ProjectGrid from "./components/ProjectGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ProjectGrid />
      <span id="contact" />
    </>
  );
}
