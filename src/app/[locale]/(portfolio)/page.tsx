import { setRequestLocale } from "next-intl/server";

import { About } from "@/components/layouts/(portfolio)/About";
import { Experience } from "@/components/layouts/(portfolio)/experience/Experience";
import { Hero } from "@/components/layouts/(portfolio)/Hero";
import { Project } from "@/components/layouts/(portfolio)/project/Project";
import { Recomendations } from "@/components/layouts/(portfolio)/Recomendations";
import { Techs } from "@/components/layouts/(portfolio)/techs/Techs";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Techs />
      <Project />
      <Recomendations />
    </>
  );
}
