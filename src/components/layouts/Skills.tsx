'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SkillsCard } from './SkillsCard';
import { Reveal } from '@/utils/Reveal';
import { slideFromLeft, visibleFromOpacityZero } from '@/utils/motion';
import { skillsList } from '@/mocks/Skills';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true });

  const cardVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="md:py-20 py-8" id="Conhecimento">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex justify-center">
          <Reveal variants={slideFromLeft(0.1)}>
            <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              Conhecimentos
            </h1>
          </Reveal>
        </div>
        <div className="lg:w-[900px] lg:mx-auto mt-12" ref={ref}>
          <ul className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-4">
            {skillsList.map((tech, index) => (
              <motion.li
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                variants={cardVariants}
                transition={{ duration: 0.8, delay: index * 0.5 }}
                key={tech.id}
              >
                <SkillsCard tech={tech} />
              </motion.li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
