import { About } from '@/components/About';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { SectionHero } from '@/components/SectionHero';
import { Skills } from '@/components/Skills';
import { Footer } from './../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="container mt-24 px-12 py-4 mx-auto">
        <SectionHero />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
