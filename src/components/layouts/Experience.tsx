import { enterpriseList } from '@/mocks/enterprise-list';
import {
  slideFromLeft,
  slideFromTop,
  visibleFromOpacityZero,
} from '@/utils/motion';
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image';

export function Experience() {
  return (
    <section>
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex flex-col gap-y-8 max-w-[1200px] mx-auto">
          <Reveal
            variants={slideFromLeft(0.1)}
            className="flex justify-center items-center"
          >
            <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
              Experiências
            </h1>
          </Reveal>

          {enterpriseList.map((enterprise) => (
            <Reveal
              key={enterprise.id}
              variants={slideFromTop}
              className="flex  gap-x-4"
            >
              <article className="flex-grow h-full">
                <h2 className="text-xl text-second-green">
                  {enterprise.position}
                </h2>

                <div className="flex items-center gap-x-4 space-y-4 w-[250px]">
                  <aside className="flex flex-col gap-y-1 h-11 my-2">
                    <h4 className="text-lg font-semibold text-primary-white">
                      {enterprise.enterprise}
                    </h4>
                    <sup className="text-xs font-thin text-primary-white">
                      {enterprise.date}
                    </sup>
                  </aside>

                  <figure>
                    <Image
                      src={enterprise.logo}
                      alt={enterprise.enterprise}
                      width={40}
                      height={40}
                      className="block w-10 h-10 -mt-5"
                    />
                  </figure>
                </div>
                <p className="text-base text-second-gray leading-snug">
                  Desenvolvo sites modernos e responsivos, com foco em
                  experiência do usuário, integração de APIs, otimização de SEO
                  e aplicação de dados estruturados para melhorar a visibilidade
                  nos motores de busca.
                </p>

                <div className="flex gap-x-2 mt-4">
                  {enterprise.tech.map((tech, index) => (
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
          ))}
        </div>
      </Reveal>
    </section>
  );
}
