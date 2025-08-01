'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { ProjectCard } from './ProjectCard';
import { slideFromLeft, visibleFromOpacityZero } from '@/utils/motion';
import { Reveal } from '@/utils/Reveal';
import { projectCard } from '@/mocks/project';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true });

  const projectVariants = {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="md:py-20 py-8" id="Projetos">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex justify-center lg:mb-12 mb-4">
          <Reveal variants={slideFromLeft(0.1)}>
            <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              Projetos
            </h1>
          </Reveal>
        </div>

        <ul
          className="flex flex-wrap lg:flex-row flex-col justify-center lg:gap-4 gap-2"
          ref={ref}
        >
          {projectCard.map((project, index) => (
            <motion.li
              key={project.id}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              variants={projectVariants}
              transition={{ duration: 0.8, delay: index * 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
