'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { ProjectCard } from './ProjectCard';
import { slideFromLeft, visibleFromOpacityZero } from '@/utils/motion';
import { Reveal } from '@/utils/Reveal';
import { IProject } from '@/@types/IProject';

const projectCard: IProject[] = [
  {
    id: 1,
    image: '/assets/projects/coffee.WebP',
    href: 'https://coffee-blima.netlify.app/',
    type: 'Website',
    title: 'Coffee Delivery',
    description:
      'Coffee Delivery é uma página web de catálogo e compra de cafés.',
  },
  {
    id: 2,
    image: '/assets/projects/shop2.0.WebP',
    href: 'https://shop-blima.netlify.app/',
    type: 'Website',
    title: 'Shop 2.0',
    description:
      'Projeto utilizando pela primeira vez a biblioteca Redux, é uma página web de catálogo de camisas, com um slide básico, adiciona o item ao carrinho e finalização de compra.',
  },
  {
    id: 3,
    image: '/assets/projects/pokedex.WebP',
    href: 'https://pokedexblima.netlify.app/',
    type: 'Website',
    title: 'Pokedex',
    description:
      'Projeto no qual trabalhei com manipulação da api pokeApi, paginação, pesquisa de pokémon por id ou nome.',
  },
  {
    id: 4,
    image: '/assets/projects/authenticationUser.WebP',
    href: 'https://github.com/Brunoo-Lima/authentication-user',
    type: 'Website',
    title: 'Sistema de Login',
    description:
      'Aplicação fullstack, baseado em criação e autenticação, faz a requisição no backend e verifica as informações.',
  },
  {
    id: 5,
    image: '/assets/projects/todolist.WebP',
    href: 'https://todolist-blima.netlify.app/',
    type: 'Website',
    title: 'To-do List',
    description:
      'Todolist onde podemos adicionar, excluir e finalizar a tarefa, sistema de busca enquanto digita e filtragem das tarefas.',
  },
  {
    id: 6,
    image: '/assets/projects/portfolio.WebP',
    href: 'https://pokedexblima.netlify.app/',
    type: 'Website',
    title: 'Primeiro Portfólio',
    description:
      'Primeiro portfólio que construir para começar a apresentar meus projetos.',
  },
  {
    id: 7,
    image: '/assets/projects/gow.WebP',
    href: 'https://gow-ragnarok.netlify.app/',
    type: 'Website',
    title: 'God of War - Ragnarok',
    description: 'Projeto de uma landing page de quando o jogo foi lançado.',
  },
  {
    id: 8,
    image: '/assets/projects/bikcraft.WebP',
    href: 'https://brunoo-lima.github.io/bikcraft/',
    type: 'Website',
    title: 'Bikcraft',
    description:
      'Projeto de um e-commerce de bicicletas, foi um dos primeiros projetos grandes no qual desenvolvi.',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
