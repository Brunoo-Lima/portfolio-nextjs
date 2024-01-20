'use client';

import Image from 'next/image';
import Link from 'next/link';

import Background from '../../public/assets/background.png';

import { TypeAnimation } from 'react-type-animation';

export function SectionHero() {
  return (
    <section className="md:py-40 py-20" id="initial">
      <div className="relative flex items-center md:justify-between justify-center">
        <div className="relative grid grid-cols-1 gap-2 items-center z-10">
          <h1 className="md:text-7xl text-4xl md:text-start text-center leading-tight">
            <span className="text-transparent bg-gradient-to-r from-primary-green via-second-green to-tertiary-green bg-clip-text font-bold">
              Olá, eu sou{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Bruno',
                1000,
                'Web Developer',
                1000,
                'FullStack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="md:text-3xl text-xl md:text-start text-center leading-tight mb-8 text-second-gray">
            Um apaixonado pela área de desenvolvimento.
          </p>

          <div className="flex sm:flex-row flex-col md:justify-start justify-center gap-4">
            <button className="border px-6 py-3 sm:w-40 w-full rounded-3xl bg-primary-black transition hover:border-opacity-75">
              <Link href="https://www.linkedin.com/in/bruno-lima-8a2407173/">
                Linkedin
              </Link>
            </button>

            <button className="border px-6 py-3 sm:w-40 w-full rounded-3xl bg-primary-black transition hover:border-opacity-75">
              <Link href="https://github.com/Brunoo-Lima">Github</Link>
            </button>
          </div>
        </div>

        <Image
          src={Background}
          alt="Imagem para efeito na parte direita da introdução"
          className="absolute md:right-24 right-0 -top-10 block rounded-section_hero max-w-full md:w-[500px] md:h-[500px] w-[140px] h-[120px] animate-spin-slow md:blur-xxxl blur-2xl md:opacity-25 opacity-65"
        />
      </div>
    </section>
  );
}
