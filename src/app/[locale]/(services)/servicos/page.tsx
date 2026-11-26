import { DifferentialSection } from "@/components/layouts/(services)/differential/DifferentialSection";
import { FAQ } from "@/components/layouts/(services)/faq/FAQ";
import { HeroSection } from "@/components/layouts/(services)/HeroSection";
import { ProjectsSection } from "@/components/layouts/(services)/projects/ProjectsSection";
import { ServicesSection } from "@/components/layouts/(services)/servicesSection/ServicesSection";
import { WorkStages } from "@/components/layouts/(services)/workStages/WorkStages";

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <DifferentialSection />
      <WorkStages />
      <FAQ />
    </>
  );
}
