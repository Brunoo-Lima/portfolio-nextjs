import Image from 'next/image';

import Me from '../../public/assets/me.jpg';
import Link from 'next/link';

export function About() {
  return (
    <section className="md:py-20 py-8" id="about">
      <div className="flex md:justify-around justify-center md:flex-row flex-col md:gap-6 gap-4 bg-second-black border border-gray-800 rounded-md md:p-6 py-4">
        <div className="md:w-5/12 w-11/12 mx-auto">
          <Image
            src={Me}
            alt="Minha foto"
            className="block max-w-full rounded-sm"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center leading-relaxed md:items-start text-center">
          <span className="text-xl font-semibold mb-2 inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
            Quem sou
          </span>
          <h1 className="text-3xl font-medium text-primary-white mb-2">
            Bruno Lima
          </h1>

          <h3 className="text-lg text-primary-white mb-4">
            FullStack Developer
          </h3>

          <p className="text-base text-second-gray text-justify leading-snug mb-6 max-md:px-5">
            Meu nome é Bruno Lima, atualmente estou cursando Análise e
            Desenvolvimento de Sistemas - Fatec. Sou desenvolvedor fullStack
            atualmente, gosto das duas áreas de atuação, tanto backend, quanto
            frontend. Estou migrando de área, no momento ainda não consegui uma
            vaga como dev, mas continuo me aprofundando na área e fazendo
            projetos pessoais para estar preparado para a minha primeira chance
            na área.
          </p>

          <div className="flex md:gap-6 gap-3 md:justify-start justify-center sm:flex-row flex-col md:p-0 px-5">
            <button className="border px-6 py-3 sm:w-40 w-full rounded-3xl bg-primary-black transition hover:border-opacity-75">
              <Link href={''}>Email</Link>
            </button>
            <button className="border px-6 py-3 sm:w-40 w-full rounded-3xl bg-primary-black transition hover:border-opacity-75">
              <Link href={''}>Download CV</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
