import { Navbar } from '@/components/Navbar';
import { SectionHero } from '@/components/SectionHero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Footer } from './../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mt-24 md:px-12 px-8 py-4 mx-auto">
        <SectionHero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
