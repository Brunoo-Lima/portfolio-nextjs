import { Skills } from './Skills/Skills';
import { About } from './About';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Header } from './header/Header';
import { Projects } from './project/Projects';
import { SectionHero } from './SectionHero';

export function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="container mt-24 md:px-12 px-8 py-4 mx-auto">
        <SectionHero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      {/* <Footer /> */}
    </>
  );
}
