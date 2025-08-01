import { About } from '@/components/layouts/About';
import { Experience } from '@/components/layouts/Experience';
import { Projects } from '@/components/layouts/project/Projects';
import { SectionHero } from '@/components/layouts/SectionHero';
import { Skills } from '@/components/layouts/Skills';

export default function HomePage() {
  return (
    <main className="container mt-24 md:px-12 px-8 py-4 mx-auto">
      <SectionHero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}
