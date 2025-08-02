import {
  slideFromLeft,
  slideFromTop,
  visibleFromOpacityZero,
} from '@/utils/motion';
import { Reveal } from '@/utils/reveal';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const Experience = async () => {
  const t = await getTranslations('Experience');

  return (
    <section id="experience" className="md:py-20 py-8">
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

          <Reveal variants={slideFromTop} className="flex  gap-x-4">
            <article className="flex-grow h-full">
              <h2 className="text-xl text-second-green">{t('area')}</h2>

              <div className="flex items-center gap-x-4 space-y-4 w-[250px]">
                <aside className="flex flex-col gap-y-1 h-11 my-2">
                  <h4 className="text-lg font-semibold text-primary-white">
                    {t('enterprise')}
                  </h4>
                  <sup className="text-xs font-thin text-primary-white">
                    {t('date')}
                  </sup>
                </aside>

                <figure>
                  <Image
                    src={t('imgURl')}
                    alt={t('enterprise')}
                    width={40}
                    height={40}
                    className="block w-10 h-10 -mt-5"
                  />
                </figure>
              </div>
              <p className="text-base text-second-gray leading-snug">
                {t('description')}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {t.raw('tech').map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="block w-max px-2 py-0.5 rounded-lg bg-primary-green text-sm font-semibold text-primary-black"
                  >
                    {tech.replace(',', ' ')}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};
