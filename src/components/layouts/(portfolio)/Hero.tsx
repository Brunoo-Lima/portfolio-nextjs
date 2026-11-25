import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { LinkButton } from "@/components/ui/button/LinkButton";
import { TitleAnimation } from "@/components/ui/title-animation";
import { githubLink, linkedinLink } from "@/utils/links";
import {
  slideFromLeft,
  slideFromRight,
  visibleFromOpacityZero,
} from "@/utils/motion";
import { slideFromTop } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

export const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section className="md:mt-9 md:mb-36 pt-20 pb-24 sm:overflow-hidden container mx-auto md:px-12 px-8">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="relative flex items-center md:justify-between justify-center">
          <Reveal>
            <div className="relative grid grid-cols-1 gap-2 items-center z-10">
              <Reveal variants={slideFromLeft(0.5)}>
                <TitleAnimation />
              </Reveal>

              <Reveal variants={slideFromLeft(0.8)}>
                <p className="md:text-3xl text-xl md:text-start text-center leading-tight mb-8 text-muted">
                  {t("subtitle")}
                </p>
              </Reveal>

              <Reveal variants={slideFromTop}>
                <div className="flex md:justify-start justify-center gap-6">
                  <LinkButton title="LinkedIn" href={linkedinLink}>
                    <LinkedinIcon />
                  </LinkButton>

                  <LinkButton title="Github" href={githubLink}>
                    <GithubIcon />
                  </LinkButton>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight(0.8)}>
            <Image
              src={"/assets/main.webp"}
              alt={t("imageAlt")}
              className="md:block hidden max-w-full lg:w-125 lg:h-125 max-h-fit "
              width={400}
              height={400}
              priority
            />
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};
