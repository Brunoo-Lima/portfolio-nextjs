import { slideFromLeft, visibleFromOpacityZero } from '@/utils/motion';
import { Reveal } from '@/utils/reveal';
import { ProjectsList } from './projects-list';
import { getTranslations } from 'next-intl/server';
export const Project = async () => {
  const t = await getTranslations('Projects');

  return (
    <section
      className="md:py-20 py-8 md:px-12 px-8 container mx-auto "
      id="projects"
    >
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex justify-center lg:mb-12 mb-4">
          <Reveal variants={slideFromLeft(0.1)}>
            <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              {t('title')}
            </h1>
          </Reveal>
        </div>

        <ProjectsList projectList={t.raw('project')} />
      </Reveal>
    </section>
  );
};
