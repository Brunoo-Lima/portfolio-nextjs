import { SkillsCard } from './SkillsCard';

export type SkillsListProps = {
  id: number;
  image: string;
  alt: string;
};

const skillsList: SkillsListProps[] = [
  {
    id: 1,
    image: '../assets/icons/html5.svg',
    alt: 'Icone do HTML5',
  },
  {
    id: 2,
    image: '../assets/icons/css3.svg',
    alt: 'Icone do CSS3',
  },
  {
    id: 3,
    image: '../assets/icons/react.svg',
    alt: 'Icone do React',
  },
  {
    id: 4,
    image: '../assets/icons/javascript.svg',
    alt: 'Icone do Javascript',
  },
  {
    id: 5,
    image: '../assets/icons/typescript.svg',
    alt: 'Icone do Typescript',
  },
  {
    id: 6,
    image: '../assets/icons/next.svg',
    alt: 'Icone do Nextjs',
  },
  {
    id: 7,
    image: '../assets/icons/sass.svg',
    alt: 'Icone do Sass',
  },
  {
    id: 8,
    image: '../assets/icons/styledComponents.svg',
    alt: 'Icone do Styled-Components',
  },
  {
    id: 9,
    image: '../assets/icons/bootstrap.svg',
    alt: 'Icone do Bootstrap',
  },

  {
    id: 10,
    image: '../assets/icons/tailwindcss.svg',
    alt: 'Icone do Tailwind css',
  },
  {
    id: 11,
    image: '../assets/icons/nodejs.svg',
    alt: 'Icone do Nodejs',
  },
  {
    id: 12,
    image: '../assets/icons/java.svg',
    alt: 'Icone do Java',
  },
  {
    id: 13,
    image: '../assets/icons/jest.svg',
    alt: 'Icone do Jest',
  },
  {
    id: 14,
    image: '../assets/icons/figma.svg',
    alt: 'Icone do Figma',
  },
];

export function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
          Conhecimentos
        </h1>
      </div>
      <div className="lg:w-[900px] lg:mx-auto mt-12">
        <ul className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-4">
          {skillsList.map((icon) => (
            <SkillsCard key={icon.id} imgUrl={icon.image} altText={icon.alt} />
          ))}
        </ul>
      </div>
    </section>
  );
}