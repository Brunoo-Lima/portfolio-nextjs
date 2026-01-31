import { About } from '@/components/layouts/About';
import { Contact } from '@/components/layouts/contact/Contact';
import { Experience } from '@/components/layouts/experience/Experience';
import { Hero } from '@/components/layouts/Hero';
import { Knowledge } from '@/components/layouts/knowledge/Knowledge';
import { Project } from '@/components/layouts/project/Project';

export default function HomePage() {
  return (
    <main className="mt-24 pt-4 pb-0">
      <Hero />
      <About />
      <Experience />
      <Knowledge />
      <Project />
      <Contact />
    </main>
  );
}
