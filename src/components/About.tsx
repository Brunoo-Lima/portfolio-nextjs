import Image from 'next/image';

import { slideFromLeft, slideFromTop } from '@/utils/motion';

import { Reveal } from '@/utils/Reveal';
import { Button } from './ui/button/Button';
import { ButtonDownload } from './ui/button/ButtonDownload';

export function About() {
  return (
    <section className="md:py-20 py-8" id="Sobre">
      <div className="flex md:justify-around justify-center md:flex-row flex-col md:gap-6 gap-4 bg-second-black border border-gray-800 rounded-md md:p-6 py-4">
        <div className="md:w-5/12 w-10/12 mx-auto">
          <Reveal variants={slideFromTop}>
            <div className="relative group">
              <figure>
                <Image
                  src="/assets/me.webp"
                  alt="Minha foto"
                  className="block max-w-full rounded-md relative"
                  width={600}
                  height={500}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 600px"
                />
              </figure>
              <aside className="absolute opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary-green via-second-green to-tertiary-green h-full w-2 top-0 left-0 rounded-tl-md rounded-bl-md  transition-opacity duration-300"></aside>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-1 flex-col justify-center leading-relaxed md:items-start text-center">
          <Reveal variants={slideFromLeft(0.2)}>
            <span className="text-xl font-semibold mb-2 inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              Quem sou
            </span>
          </Reveal>
          <Reveal variants={slideFromLeft(0.4)}>
            <h1 className="text-3xl font-medium text-primary-white mb-2">
              Bruno Lima
            </h1>
          </Reveal>
          <Reveal variants={slideFromLeft(0.6)}>
            <h2 className="text-lg text-primary-white mb-4">
              Front End Developer
            </h2>
          </Reveal>

          <Reveal variants={slideFromLeft(0.8)}>
            <p className="text-base text-second-gray text-justify leading-snug mb-6 max-md:px-5">
              Meu nome é Bruno Lima, atualmente estou cursando Análise e
              Desenvolvimento de Sistemas - Fatec. Sou desenvolvedor front end
              atualmente, gosto das duas áreas de atuação, tanto backend, quanto
              frontend, planejo no futuro se tornar um desenvolvedor FullStack.
              No momento, estou migrando de área, ainda não consegui uma vaga
              como dev, mas continuo me aprofundando na área e fazendo projetos
              pessoais para estar preparado para a minha primeira chance na
              área.
            </p>
          </Reveal>
          <Reveal variants={slideFromTop}>
            <div className="flex sm:flex-row flex-col md:justify-start justify-center md:gap-4 gap-4 md:p-0 p-4">
              <Button text="Email" />
              <ButtonDownload href="/assets/devFront.pdf" text="Download CV" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
