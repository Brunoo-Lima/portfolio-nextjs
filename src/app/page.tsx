import { AboutMe } from '@/components/layouts/about-me';
import { Contact } from '@/components/layouts/contact/contact';
import { Experience } from '@/components/layouts/experience';
import { Hero } from '@/components/layouts/hero';
import { Project } from '@/components/layouts/project/project';
import { Skills } from '@/components/layouts/skills/skills';

export default function HomePage() {
  return (
    <main className="mt-24 pt-4 pb-0">
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
