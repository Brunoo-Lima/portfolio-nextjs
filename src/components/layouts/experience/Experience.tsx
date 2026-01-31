import { getTranslations } from 'next-intl/server';

import {
  slideFromLeft,
  slideFromTop,
  visibleFromOpacityZero,
} from '@/utils/motion';
import { Reveal } from '@/utils/Reveal';

import { Companies } from './Companies';

export const Experience = async () => {
  const t = await getTranslations('Experience');

  const companies = t.raw('companies');

  return (
    <section
      id="experience"
      className="md:py-20 py-8 md:px-12 px-8 container mx-auto"
    >
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex flex-col gap-y-8 max-w-[1200px] mx-auto">
          <Reveal
            variants={slideFromLeft(0.1)}
            className="flex justify-center items-center"
          >
            <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              {t('title')}
            </h1>
          </Reveal>

          <Reveal variants={slideFromTop}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_2fr] gap-4">
              <Companies companies={companies} />
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};
