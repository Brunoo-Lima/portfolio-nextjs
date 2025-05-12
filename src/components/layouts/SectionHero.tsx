import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {
  slideFromLeft,
  slideFromRight,
  visibleFromOpacityZero,
} from '@/utils/motion';
import { slideFromTop } from '../../utils/motion';

import { Reveal } from '@/utils/Reveal';
import { LinkButton } from '../ui/button/LinkButton';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { GithubIcon } from '../icons/GithubIcon';
import { TitleAnimation } from '../ui/Title/Title';

export function SectionHero() {
  return (
    <section
      className="md:mt-9 md:mb-36 pt-20 pb-24 sm:overflow-hidden"
      id="Início"
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
                  Um apaixonado pela área de desenvolvimento.
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
            alt="Imagem para efeito na parte direita da introdução"
            className="md:hidden absolute lg:right-20 right-0 md:-top-20 -top-10 block rounded-section_hero max-w-full md:w-[500px] md:h-[500px] w-[140px] h-[120px] animate-spin-slow md:blur-xxxl blur-2xl md:opacity-25 opacity-65 "
            width={500}
            height={500}
          />

          <Reveal variants={slideFromRight(0.8)}>
            <Image
              src={'/assets/main.webp'}
              alt="Imagem de background na direita da introdução"
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
}
