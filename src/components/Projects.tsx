import { ProjectCard } from './ProjectCard';

type ProjectCardProps = {
  id: number;
  image: string;
  href: string;
  title: string;
  description: string;
  technologies: string;
};

const projectCard: ProjectCardProps[] = [
  {
    id: 1,
    image: '/assets/projects/pokedex.png',
    href: 'https://pokedexblima.netlify.app/',
    title: 'Pokedex',
    description:
      'Projeto no qual trabalhei com manipulação da api pokeApi, paginação, pesquisa de pokémon por id ou nome.',
    technologies: 'ReactJs, Bootstrap',
  },
  {
    id: 2,
    image: '/assets/projects/portfolio.png',
    href: 'https://pokedexblima.netlify.app/',
    title: 'Primeiro Portfólio',
    description:
      'Primeiro portfólio que construir para começar a apresentar meus projetos.',
    technologies: 'HTML, Scss e JavaScript',
  },
  {
    id: 3,
    image: '/assets/projects/gow.png',
    href: 'https://gow-ragnarok.netlify.app/',
    title: 'God of War - Ragnarok',
    description: 'Projeto de uma landing page de quando o jogo foi lançado.',
    technologies: 'HTML, Scss e JavaScript',
  },
  {
    id: 4,
    image: '/assets/projects/bikcraft.png',
    href: 'https://brunoo-lima.github.io/bikcraft/',
    title: 'Bikcraft',
    description:
      'Projeto de uma e-commerce de bicicletas, foi um dos primeiros projetos grandes no qual desenvolvi.',
    technologies: 'HTML, Scss e JavaScript',
  },
];

export function Projects() {
  return (
    <section className="py-20">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
          Projetos
        </h1>
      </div>

      <div className="grid md:grid-cols-3 md:gap-12 gap-8 ">
        {projectCard.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            href={project.href}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
