import { AboutMe } from '@/components/layouts/about-me';
import { Contact } from '@/components/layouts/contact/contact';
import { Experience } from '@/components/layouts/experience';
import { Hero } from '@/components/layouts/hero';
import { Project } from '@/components/layouts/project/project';
import { Skills } from '@/components/layouts/skills/skills';

export default function HomePage() {
  return (
    <main className="container mt-24 md:px-12 px-8 py-4 mx-auto">
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
