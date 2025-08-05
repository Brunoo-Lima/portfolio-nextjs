import Image from 'next/image';
import {
  slideFromLeft,
  slideFromRight,
  visibleFromOpacityZero,
} from '@/utils/motion';
import { slideFromTop } from '../../utils/motion';

import { Reveal } from '@/utils/Reveal';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { GithubIcon } from '../icons/GithubIcon';
import { TitleAnimation } from '../ui/Title/Title';
import { getTranslations } from 'next-intl/server';
import { LinkButton } from '../ui/button/LinkButton';

export const Hero = async () => {
  const t = await getTranslations('Hero');

  return (
    <section
      className="md:mt-9 md:mb-36 pt-20 pb-24 sm:overflow-hidden container mx-auto md:px-12 px-8"
      id="home"
    >
      <Reveal variants={visibleFromOpacityZero}>
        <div className="relative flex items-center md:justify-between justify-center">
          <Reveal>
            <div className="relative grid grid-cols-1 gap-2 items-center z-10">
              <Reveal variants={slideFromLeft(0.5)}>
                <TitleAnimation />
              </Reveal>

              <Reveal variants={slideFromLeft(0.8)}>
                <p className="md:text-3xl text-xl md:text-start text-center leading-tight mb-8 text-second-gray">
                  {t('subtitle')}
                </p>
              </Reveal>

              <Reveal variants={slideFromTop}>
                <div className="flex md:justify-start justify-center gap-6">
                  <LinkButton
                    textTooltip="LinkedIn"
                    icon={<LinkedinIcon />}
                    href="https://www.linkedin.com/in/bruno-lima-8a2407173/"
                  />

                  <LinkButton
                    textTooltip="Github"
                    icon={<GithubIcon />}
                    href="https://github.com/Brunoo-Lima"
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Image
            src={'/assets/background.webp'}
            alt=""
            className="md:hidden absolute lg:right-20 right-0 md:-top-20 -top-10 block rounded-section_hero max-w-full md:w-[500px] md:h-[500px] w-[140px] h-[120px] animate-spin-slow md:blur-xxxl blur-2xl md:opacity-25 opacity-65 "
            width={500}
            height={500}
          />

          <Reveal variants={slideFromRight(0.8)}>
            <Image
              src={'/assets/main.webp'}
              alt="Tecnologias"
              className="md:block hidden max-w-full lg:w-[500px] lg:h-[500px] max-h-fit "
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
