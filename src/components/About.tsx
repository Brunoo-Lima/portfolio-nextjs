'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import { slideFromLeft, slideFromTop } from '@/utils/motion';

import Me from '../../public/assets/me.jpg';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/devFullStack.pdf';
    link.download = 'curriculo_Bruno.pdf';
    link.click();
  };

  return (
    <section className="md:py-20 py-8" id="about">
      <div className="flex md:justify-around justify-center md:flex-row flex-col md:gap-6 gap-4 bg-second-black border border-gray-800 rounded-md md:p-6 py-4">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={slideFromTop}
          ref={ref}
          className="md:w-5/12 w-11/12 mx-auto"
        >
          <div className="relative group">
            <Image
              src={Me}
              alt="Minha foto"
              className="block max-w-full rounded-md relative "
            />
            <div className="absolute invisible group-hover:visible bg-gradient-to-t from-primary-green via-second-green to-tertiary-green h-full w-2 top-0 left-0 rounded-tl-md rounded-bl-md transition-all hover:duration-300"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
          className="flex flex-1 flex-col justify-center leading-relaxed md:items-start text-center"
        >
          <motion.span
            variants={slideFromLeft(0.2)}
            className="text-xl font-semibold mb-2 inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text"
          >
            Quem sou
          </motion.span>
          <motion.h1
            variants={slideFromLeft(0.4)}
            className="text-3xl font-medium text-primary-white mb-2"
          >
            Bruno Lima
          </motion.h1>

          <motion.h3
            variants={slideFromLeft(0.6)}
            className="text-lg text-primary-white mb-4"
          >
            FullStack Developer
          </motion.h3>

          <motion.p
            variants={slideFromLeft(0.8)}
            className="text-base text-second-gray text-justify leading-snug mb-6 max-md:px-5"
          >
            Meu nome é Bruno Lima, atualmente estou cursando Análise e
            Desenvolvimento de Sistemas - Fatec. Sou desenvolvedor fullStack
            atualmente, gosto das duas áreas de atuação, tanto backend, quanto
            frontend. Estou migrando de área, no momento ainda não consegui uma
            vaga como dev, mas continuo me aprofundando na área e fazendo
            projetos pessoais para estar preparado para a minha primeira chance
            na área.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideFromLeft(1)}
            className="flex sm:flex-row flex-col md:justify-start justify-center md:gap-4 gap-4 md:p-0 p-4"
          >
            <button className="bg-gradient-to-br from-primary-green via-second-green to-tertiary-green text-primary-black font-semibold px-1 py-1 sm:w-40 md:h-full h-12 w-full rounded-full transition duration-300 hover:from-tertiary-green hover:via-second-green hover:to-primary-green">
              <Link
                href={'mailto:bruno2.jean.lima@outlook.com.br'}
                target="blank"
              >
                Email
              </Link>
            </button>
            <button className="bg-gradient-to-br from-primary-green via-second-green to-tertiary-green text-primary-black font-semibold px-1 py-1 sm:w-40 w-full rounded-full transition duration-300">
              <span
                className="bg-primary-black text-primary-white block px-5 py-2 rounded-full hover:bg-primary-black/80"
                onClick={handleDownload}
              >
                Download CV
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
