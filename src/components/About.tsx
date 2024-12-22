import Image from 'next/image';

import { slideFromLeft, slideFromTop } from '@/utils/motion';

import { Reveal } from '@/utils/Reveal';
import { Button } from './ui/button/Button';
import { ButtonDownload } from './ui/button/ButtonDownload';

export function About() {
  return (
    <section className="md:py-20 py-8" id="Sobre">
      <div className="flex md:justify-around justify-center items-center md:flex-row flex-col flex-wrap sm:gap-6 gap-4 bg-second-black border border-gray-800 rounded-md md:p-6 py-4 md:max-w-[1200px] lg:h-[520px] mx-auto">
        <div className=" mx-auto">
          <Reveal variants={slideFromTop}>
            <figure className="sm:w-[383px] sm:h-[480px] min-w-[250px] min-h-[380px]">
              <Image
                src="/assets/me.webp"
                alt="Minha foto"
                className="block sm:w-[383px] sm:h-[480px] w-[320px] h-[400px] rounded-lg"
                width={600}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 600px"
              />
            </figure>
          </Reveal>
        </div>

        <div className="flex flex-1 flex-col justify-center leading-relaxed lg:items-start text-center">
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
              Meu nome é Bruno Lima e estou cursando Análise e Desenvolvimento
              de Sistemas na Fatec. Atualmente, atuo como desenvolvedor
              front-end, mas também tenho interesse em backend e pretendo me
              tornar um desenvolvedor full-stack no futuro. No momento, estou
              ganhando experiência prática como estagiário, aprimorando minhas
              habilidades e explorando novas tecnologias. Além disso, desenvolvo
              projetos pessoais para consolidar meu aprendizado e expandir meu
              portfólio.
            </p>
          </Reveal>
          <Reveal variants={slideFromTop}>
            <div className="flex sm:flex-row flex-col lg:justify-start justify-center md:gap-4 gap-4 md:p-0 p-4">
              <Button text="Email" />
              <ButtonDownload href="/assets/devFront.pdf" text="Download CV" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
