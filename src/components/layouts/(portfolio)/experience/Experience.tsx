import { getTranslations } from "next-intl/server";

import { SubtitleSection } from "@/components/ui/subtitle-section";
import {
  slideFromLeft,
  slideFromTop,
  visibleFromOpacityZero,
} from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { Companies } from "./Companies";

export const Experience = async () => {
  const t = await getTranslations("Experience");

  const companies = t.raw("companies");

  return (
    <section
      id="experience"
      className="md:py-28 py-8 md:px-12 px-8 mx-auto bg-second-black h-[500px] section__experience"
    >
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex flex-col gap-y-14 max-w-[1200px] mx-auto">
          <Reveal
            variants={slideFromLeft(0.1)}
            className="flex justify-center items-center"
          >
            <SubtitleSection>{t("title")}</SubtitleSection>
          </Reveal>

          <Reveal variants={slideFromTop}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_2fr] gap-4">
              <Companies companies={companies} />
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};
