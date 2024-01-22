'use client';

import { motion, useInView } from 'framer-motion';

import { ProjectCard } from './ProjectCard';
import { useRef } from 'react';
import { slideFromLeft } from '@/utils/motion';

type ProjectCardProps = {
  id: number;
  image: string;
  href: string;
  type: string;
  title: string;
  description: string;
};

const projectCard: ProjectCardProps[] = [
  {
    id: 1,
    image: '/assets/projects/pokedex.png',
    href: 'https://pokedexblima.netlify.app/',
    type: 'Website',
    title: 'Pokedex',
    description:
      'Projeto no qual trabalhei com manipulação da api pokeApi, paginação, pesquisa de pokémon por id ou nome.',
  },
  {
    id: 2,
    image: '/assets/projects/authenticationUser.png',
    href: 'https://github.com/Brunoo-Lima/authentication-user',
    type: 'Website',
    title: 'Sistema de Login',
    description:
      'Aplicação fullstack, baseado em criação e autenticação, faz a requisição no backend e verifica as informações.',
  },
  {
    id: 3,
    image: '/assets/projects/todolist.png',
    href: 'https://todolist-blima.netlify.app/',
    type: 'Website',
    title: 'To-do List',
    description:
      'Todolist onde podemos adicionar, excluir e finalizar a tarefa, sistema de busca enquanto digita e vai filtrando e filtragem das tarefas.',
  },
  {
    id: 4,
    image: '/assets/projects/portfolio.png',
    href: 'https://pokedexblima.netlify.app/',
    type: 'Website',
    title: 'Primeiro Portfólio',
    description:
      'Primeiro portfólio que construir para começar a apresentar meus projetos.',
  },
  {
    id: 5,
    image: '/assets/projects/gow.png',
    href: 'https://gow-ragnarok.netlify.app/',
    type: 'Website',
    title: 'God of War - Ragnarok',
    description: 'Projeto de uma landing page de quando o jogo foi lançado.',
  },
  {
    id: 6,
    image: '/assets/projects/bikcraft.png',
    href: 'https://brunoo-lima.github.io/bikcraft/',
    type: 'Website',
    title: 'Bikcraft',
    description:
      'Projeto de uma e-commerce de bicicletas, foi um dos primeiros projetos grandes no qual desenvolvi.',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="md:py-20 py-8" id="projects">
      <div className="flex justify-center lg:mb-12 mb-4">
        <motion.h1
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={slideFromLeft(0.2)}
          ref={ref}
          className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text"
        >
          Projetos
        </motion.h1>
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
            transition={{ duration: 0.5, delay: index * 0.6 }}
          >
            <ProjectCard
              imgUrl={project.image}
              href={project.href}
              type={project.type}
              title={project.title}
              description={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
