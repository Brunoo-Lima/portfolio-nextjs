'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CardProject } from './card-project';
import { IProject } from '@/@types/IProject';

interface IProjectsListProps {
  projectList: IProject[];
}

export const ProjectsList = ({ projectList }: IProjectsListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true });

  const projectVariants = {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ul
      className="flex flex-wrap lg:flex-row flex-col justify-center lg:gap-4 gap-2"
      ref={ref}
    >
      {projectList.map((project, index) => (
        <motion.li
          key={index}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={projectVariants}
          transition={{ duration: 0.8, delay: index * 0.6 }}
        >
          <CardProject project={project} />
        </motion.li>
      ))}
    </ul>
  );
};
