import { About } from '@/components/layouts/About';
import { Experience } from '@/components/layouts/Experience';
import { Knowledge } from '@/components/layouts/knowledge/Knowledge';
import { Project } from '@/components/layouts/project/Project';
import { Hero } from '@/components/layouts/Hero';

export default function HomePage() {
  return (
    <main className="mt-24 pt-4 pb-0">
      <Hero />
      <About />
      <Experience />
      <Knowledge />
      <Project />
    </main>
  );
}
