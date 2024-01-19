import { ProjectCard } from './ProjectCard';

type ProjectCardProps = {
  id: number;
  image: string;
  href: string;
  type: string;
  title: string;
  description: string;
  technologies: string;
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
    technologies: 'ReactJs, Bootstrap',
  },
  {
    id: 2,
    image: '/assets/projects/authenticationUser.png',
    href: 'https://github.com/Brunoo-Lima/authentication-user',
    type: 'Website',
    title: 'Sistema de Login',
    description:
      'Aplicação fullstack, baseado em criação e autenticação, faz a requisição no backend e verifica as informações.',
    technologies:
      'React, Typescript, CSS modules, React router, Nodejs, JwtWebToken.',
  },
  {
    id: 3,
    image: '/assets/projects/todolist.png',
    href: 'https://todolist-blima.netlify.app/',
    type: 'Website',
    title: 'To-do List',
    description:
      'Todolist onde podemos adicionar, excluir e finalizar a tarefa, sistema de busca enquanto digita e vai filtrando e filtragem das tarefas.',
    technologies: 'React, Javascript, Styled-Components.',
  },
  {
    id: 4,
    image: '/assets/projects/portfolio.png',
    href: 'https://pokedexblima.netlify.app/',
    type: 'Website',
    title: 'Primeiro Portfólio',
    description:
      'Primeiro portfólio que construir para começar a apresentar meus projetos.',
    technologies: 'HTML, Scss e Javascript',
  },
  {
    id: 5,
    image: '/assets/projects/gow.png',
    href: 'https://gow-ragnarok.netlify.app/',
    type: 'Website',
    title: 'God of War - Ragnarok',
    description: 'Projeto de uma landing page de quando o jogo foi lançado.',
    technologies: 'HTML, Scss e Javascript',
  },
  {
    id: 6,
    image: '/assets/projects/bikcraft.png',
    href: 'https://brunoo-lima.github.io/bikcraft/',
    type: 'Website',
    title: 'Bikcraft',
    description:
      'Projeto de uma e-commerce de bicicletas, foi um dos primeiros projetos grandes no qual desenvolvi.',
    technologies: 'HTML, Scss e Javascript',
  },
];

export function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
          Projetos
        </h1>
      </div>

      <div className="flex flex-wrap md:flex-row justify-center lg:gap-6 gap-2 ">
        {projectCard.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            href={project.href}
            type={project.type}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
