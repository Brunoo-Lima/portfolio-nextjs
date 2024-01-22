'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import Background from '../../public/assets/background.png';
import Linkedin from '../../public/assets/network/linkedin.svg';
import Github from '../../public/assets/network/github.svg';

import { TypeAnimation } from 'react-type-animation';
import { slideFromBottom, slideFromLeft } from '@/utils/motion';
import { slideFromTop } from './../utils/motion';

export function SectionHero() {
  return (
    <section className="md:py-40 py-20" id="initial">
      <div className="relative flex items-center md:justify-between justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 gap-2 items-center z-10"
        >
          <motion.h1
            variants={slideFromLeft(0.5)}
            className="md:text-7xl text-4xl md:text-start text-center leading-tight"
          >
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
          </motion.h1>

          <motion.p
            variants={slideFromLeft(0.8)}
            className="md:text-3xl text-xl md:text-start text-center leading-tight mb-8 text-second-gray"
          >
            Um apaixonado pela área de desenvolvimento.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromTop}
            className="flex md:justify-start justify-center gap-6"
          >
            <button className="hover:bg-primary-gray/45 px-4 py-2 rounded-lg transition duration-300 border border-transparent hover:border hover:border-primary-gray">
              <Link
                href="https://www.linkedin.com/in/bruno-lima-8a2407173/"
                target="blank"
              >
                <Image
                  src={Linkedin}
                  alt="Icone do linkedIn"
                  className="w-8 h-8"
                />
              </Link>
            </button>

            <button className="hover:bg-primary-gray/45 px-4 py-2 rounded-lg transition duration-300 border border-transparent  hover:border hover:border-primary-gray">
              <Link href="https://github.com/Brunoo-Lima" target="blank">
                <Image src={Github} alt="Icone do github" className="w-8 h-8" />
              </Link>
            </button>
          </motion.div>
        </motion.div>

        <Image
          src={Background}
          alt="Imagem para efeito na parte direita da introdução"
          className="absolute lg:right-20 right-0 md:-top-20 -top-10 block rounded-section_hero max-w-full md:w-[500px] md:h-[500px] w-[140px] h-[120px] animate-spin-slow md:blur-xxxl blur-2xl md:opacity-25 opacity-65"
        />
      </div>
    </section>
  );
}
