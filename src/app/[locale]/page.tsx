import { setRequestLocale } from "next-intl/server";

import { About } from "@/components/layouts/About";
import { Experience } from "@/components/layouts/experience/Experience";
import { Hero } from "@/components/layouts/Hero";
import { Project } from "@/components/layouts/project/Project";
import { Recomendations } from "@/components/layouts/Recomendations";
import { Techs } from "@/components/layouts/techs/Techs";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mt-24 pt-4 pb-0 relative">
      <Hero />
      <About />
      <Experience />
      <Techs />
      <Project />
      <Recomendations />
    </main>
  );
}
