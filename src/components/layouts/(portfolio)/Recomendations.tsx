import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SubtitleSection } from "@/components/ui/subtitle-section";
import { visibleFromOpacityZero } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

export const Recomendations = async () => {
  const t = await getTranslations("Recomendations");

  return (
    <section
      className="py-20 md:pt-28 pt-8 bg-second-black"
      id="recomendations"
    >
      <Reveal
        variants={visibleFromOpacityZero}
        className="flex justify-center items-center"
      >
        <SubtitleSection>{t("title")}</SubtitleSection>
      </Reveal>
      <Reveal variants={visibleFromOpacityZero}>
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
        </div>
      </Reveal>
    </section>
  );
};
