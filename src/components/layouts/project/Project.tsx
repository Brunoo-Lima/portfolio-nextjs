import { getTranslations } from "next-intl/server";

import { SubtitleSection } from "@/components/ui/subtitle-section";
import { slideFromLeft, visibleFromOpacityZero } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { ProjectsList } from "./ProjectsList";

export const Project = async () => {
  const t = await getTranslations("Projects");

  return (
    <section
      className="md:py-20 py-8 md:px-12 px-8 container mx-auto "
      id="projects"
    >
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex justify-center lg:mb-12 mb-4">
          <Reveal variants={slideFromLeft(0.1)}>
            <SubtitleSection>{t("title")}</SubtitleSection>
          </Reveal>
        </div>

        <ProjectsList projectList={t.raw("project")} />
      </Reveal>
    </section>
  );
};
