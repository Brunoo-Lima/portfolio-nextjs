'use client';

import Image from 'next/image';
import Link from 'next/link';

import Background from '@/assets/background.png';
import Linkedin from '@/assets/network/linkedin.svg';
import Github from '@/assets/network/github.svg';

import { TypeAnimation } from 'react-type-animation';

export function SectionHero() {
  return (
    <section className="py-20" id="initial">
      <div className="relative flex items-center justify-between">
        <div className="relative grid grid-cols-1 gap-2 items-center">
          <h1 className="md:text-5xl text-3xl md:text-start text-center leading-tight">
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
                'Backend Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="md:text-3xl text-2xl md:text-start text-center leading-tight mb-8 text-second-gray">
            Um apaixonado pela área de desenvolvimento.
          </p>

          <div className="flex sm:flex-row flex-col md:justify-start justify-center gap-4">
            <button className="border px-6 py-3 sm:w-fit w-full rounded-3xl bg-primary-black transition hover:border-opacity-75">
              <Link href="https://www.linkedin.com/in/bruno-lima-8a2407173/">
                Linkedin
              </Link>
            </button>

            <button className="border px-6 py-3 sm:w-fit w-full rounded-3xl bg-primary-black transition hover:border-opacity-75">
              <Link href="https://github.com/Brunoo-Lima">Github</Link>
            </button>
          </div>
        </div>

        <Image
          src={Background}
          alt="Imagem para efeito na parte direita da introdução"
          className="absolute md:right-28 right-0 top-0 block rounded-section_hero max-w-full md:w-[400px] md:h-[400px] w-[80px] h-[80px] animate-spin-slow blur-xxxl sm:opacity-30 opacity-95"
        />
      </div>
    </section>
  );
}
