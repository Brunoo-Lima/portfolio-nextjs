"use client";

import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { visibleFromOpacityZero } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { SubtitleSection } from "../ui/subtitle-section";

export const Recomendations = () => {
  const t = useTranslations("Recomendations");

  return (
    <section className="py-20 pt-8" id="contact">
      <Reveal
        variants={visibleFromOpacityZero}
        className="flex justify-center items-center"
      >
        <SubtitleSection>{t("title")}</SubtitleSection>
      </Reveal>
      <div className="mx-auto flex flex-col items-center justify-center gap-6 mt-12 px-6">
        <div className="max-w-[785px]">
          <Image
            src={"/img/recomendacao.webp"}
            alt="Recomendação CEO Mestres da Web"
            width={785}
            height={292}
            loading="lazy"
            className="object-contain rounded-md"
          />
        </div>

        <a
          href="https://www.linkedin.com/in/bruno-lima-8a2407173/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="md:text-base rounded-xl py-2 px-4 bg-transparent hover:bg-gray-800 text-second-green transition duration-300 cursor-pointer flex items-center gap-2 relative link-recomendation"
        >
          Ver recomendação completa
          <MoveRightIcon size={24} />
        </a>
      </div>
    </section>
  );
};
