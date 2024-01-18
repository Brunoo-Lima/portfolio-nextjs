import { ProjectCard } from './ProjectCard';

type ProjectCardProps = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  technologies: string;
};

const projectCard: ProjectCardProps[] = [
  {
    id: 1,
    image: '/assets/projects/pokedex.png',
    alt: 'Projeto da pokedex do pokemon',
    title: 'Pokedex',
    description:
      'Projeto no qual trabalhei com manipulação da api pokeApi, paginação, pesquisa de pokémon por id ou nome.',
    technologies: 'ReactJs, Bootstrap',
  },
  {
    id: 2,
    image: '/assets/projects/portfolio1.png',
    alt: 'Projeto Primeiro Portfólio',
    title: 'Primeiro Portfólio',
    description:
      'Primeiro portfólio que construir para começar a apresentar meus projetos.',
    technologies: 'HTML, Scss e JavaScript',
  },
  {
    id: 3,
    image: '/assets/projects/godofwar.png',
    alt: 'Projeto God of War - Ragnarok',
    title: 'God of War - Ragnarok',
    description: 'Projeto de uma landing page de quando o jogo foi lançado.',
    technologies: 'HTML, Scss e JavaScript',
  },
  {
    id: 4,
    image: '/assets/projects/bikcraft.png',
    alt: 'Projeto Bikcraft',
    title: 'Bikcraft',
    description:
      'Projeto de uma e-commerce de bicicletas, foi um dos primeiros projetos grandes no qual desenvolvi.',
    technologies: 'HTML, Scss e JavaScript',
  },
];

export function Projects() {
  return (
    <section className="py-20">
      <div className="">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
            Projetos
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto">
          {projectCard.map((project) => (
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              altText={project.alt}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
