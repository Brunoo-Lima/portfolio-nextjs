import { Navbar } from '@/components/Navbar';
import { SectionHero } from '@/components/SectionHero';

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="container mt-24 px-12 py-4 mx-auto">
        <SectionHero />
      </div>
    </main>
  );
}
