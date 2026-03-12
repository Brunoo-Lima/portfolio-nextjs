"use client";

import { useInView } from "framer-motion";
import { CodeXmlIcon, ServerIcon, WrenchIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { SubtitleSection } from "@/components/ui/subtitle-section";
import { backendList, frontendList, toolsList } from "@/mocks/techList";
import { slideFromLeft, visibleFromOpacityZero } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { TechCategory } from "./TechCategory";

export const Techs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true });
  const t = useTranslations("Techs");

  const categories = [
    { icon: CodeXmlIcon, label: "Front-end", items: frontendList },
    { icon: ServerIcon, label: "Back-end", items: backendList },
    { icon: WrenchIcon, label: "Ferramentas", items: toolsList },
  ];

  return (
    <section className="md:py-28 py-8 mt-8 px-8 container mx-auto" id="techs">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex justify-center">
          <Reveal variants={slideFromLeft(0.1)}>
            <SubtitleSection>{t("title")}</SubtitleSection>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-24 relative">
          <div className="sticky top-32 left-0 self-start lg:block hidden">
            <Image
              src="/assets/main.webp"
              alt="Tecnologias e ferramentas"
              width={600}
              height={600}
              loading="lazy"
              className="object-contain lg:block hidden lg:w-[600px] lg:h-[600px] w-[400px] h-[400px]"
            />
          </div>

          <div
            className="lg:w-1/2 w-full lg:mx-auto max-w-full pt-6 space-y-3"
            ref={ref}
          >
            {categories.map((cat) => (
              <TechCategory key={cat.label} {...cat} isInView={isInView} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
