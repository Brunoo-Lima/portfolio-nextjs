import parse from "html-react-parser";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { slideFromLeft, slideFromTop } from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { ButtonDownload } from "../ui/button/ButtonDownload";

export const About = async () => {
  const t = await getTranslations("About");

  return (
    <section
      className="md:py-20 mb-24 py-8 md:px-12 px-8 container mx-auto"
      id="about"
    >
      <div className="flex md:justify-around justify-start items-start md:flex-row flex-col flex-wrap sm:gap-6 gap-4 bg-second-black border border-gray-800 rounded-md md:p-6 py-4 md:max-w-[1200px] lg:h-[380px] mx-auto container__about">
        <div className="mx-auto -mt-16">
          <Reveal variants={slideFromTop}>
            <figure>
              <Image
                src="/assets/me.webp"
                alt="Minha foto"
                className="block sm:w-[360px] sm:h-[453px] rounded-lg "
                width={360}
                height={453}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </figure>
          </Reveal>
        </div>

        <div className="flex flex-1 flex-col justify-start leading-relaxed lg:items-start text-center">
          <Reveal variants={slideFromLeft(0.2)}>
            <span className="text-xl font-semibold mb-2 inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              {t("who_are")}
            </span>
          </Reveal>
          <Reveal variants={slideFromLeft(0.4)}>
            <h3 className="text-3xl font-medium text-primary-white mb-2 font-secondary">
              {t("title")}
            </h3>
          </Reveal>
          <Reveal variants={slideFromLeft(0.6)}>
            <h4 className="text-lg font-medium text-primary-white mb-4">
              {t("subtitle")}
            </h4>
          </Reveal>

          <Reveal variants={slideFromLeft(0.8)}>
            <p className="text-base text-second-gray text-justify leading-normal mb-6 max-md:px-5">
              {parse(t("description"))}
            </p>
          </Reveal>
          <Reveal variants={slideFromTop}>
            <div className="flex sm:flex-row flex-col lg:justify-start justify-center md:gap-4 gap-4 md:p-0 p-4">
              <ButtonDownload
                href="/curriculo-dev.pdf"
                textTooltip="Abrir currículo"
                text={t("button_download_cv")}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
