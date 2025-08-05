'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './Card';
import { Reveal } from '@/utils/Reveal';
import { slideFromLeft, visibleFromOpacityZero } from '@/utils/motion';
import { techList } from '@/mocks/techList';
import { useTranslations } from 'next-intl';

export const Knowledge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref as any, { once: true });
  const t = useTranslations('Knowledge');

  const cardVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="md:py-20 py-8 md:px-12 px-8 container mx-auto"
      id="knowledge"
    >
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex justify-center">
          <Reveal variants={slideFromLeft(0.1)}>
            <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              {t('title')}
            </h1>
          </Reveal>
        </div>
        <div className="lg:w-[900px] lg:mx-auto mt-12" ref={ref}>
          <ul className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-4">
            {techList.map((tech, index) => (
              <motion.li
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                variants={cardVariants}
                transition={{ duration: 0.8, delay: index * 0.5 }}
                key={tech.id}
              >
                <Card tech={tech} />
              </motion.li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};
