import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/utilities/Container';

import Background from '@/assets/background.png';
import Linkedin from '@/assets/network/linkedin.svg';
import Github from '@/assets/network/github.svg';

export function SectionHero() {
  return (
    <section className="sm:px-10 px-0 py-20">
      <Container>
        <div className="relative flex items-center justify-between">
          <div className="relative flex flex-col justify-between sm:items-start items-center w-[70ch]">
            <h1 className="lg:text-5xl text-3xl md:text-start text-center">
              Olá, eu sou Bruno Lima
            </h1>

            <p className="lg:text-3xl text-2xl md:text-start text-center leading-tight mb-8 text-second-gray">
              Um apaixonado pela área de desenvolvimento.
            </p>

            <div className="flex gap-6">
              <button className="flex items-center justify-center gap-2 border px-4 py-2 max-w-full sm:w-40 w-32 rounded bg-primary-black transition hover:border-opacity-75">
                <Image
                  src={Linkedin}
                  alt="Icone do linkedin"
                  className="w-7 h-7"
                />
                <Link href="https://www.linkedin.com/in/bruno-lima-8a2407173/">
                  Linkedin
                </Link>
              </button>

              <button className="flex items-center justify-center gap-2 border px-4 py-2 max-w-full sm:w-40 w-32 rounded bg-primary-black transition hover:border-opacity-75">
                <Image src={Github} alt="Icone do github" className="w-7 h-7" />

                <Link href="https://github.com/Brunoo-Lima">Github</Link>
              </button>
            </div>
          </div>

          <Image
            src={Background}
            alt="Imagem para efeito na parte direita da introdução"
            className="absolute lg:right-28 right-0 top-0 block rounded-section_hero sm:max-w-full min-w-fit md:w-[400px] md:h-[400px] w-[80px] h-[80px] animate-spin-slow blur-xxxl sm:opacity-30 opacity-95"
          />
        </div>
      </Container>
    </section>
  );
}
