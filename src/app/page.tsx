import { About } from "@/components/layouts/About";
import { Experience } from "@/components/layouts/experience/Experience";
import { Hero } from "@/components/layouts/Hero";
import { Project } from "@/components/layouts/project/Project";
import { Recomendations } from "@/components/layouts/Recomendations";
import { Techs } from "@/components/layouts/techs/Techs";

export default function HomePage() {
  return (
    <main className="mt-24 pt-4 pb-0 relative">
      <Hero />
      <About />
      <Experience />
      <Techs />
      <Project />
      <Recomendations />
    </main>
  );
}
