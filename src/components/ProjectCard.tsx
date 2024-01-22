import Link from 'next/link';

type ProjectCardProps = {
  imgUrl: string;
  href: string;
  type: string;
  title: string;
  description: string;
  technologies: string;
};

export function ProjectCard({
  imgUrl,
  href,
  type,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div
      className="lg:w-[450px] w-full lg:h-[350px] md:h-[400px] h-[300px] bg-contain group relative rounded-md border border-gray-800 md:mt-0 mt-4"
      style={{
        background: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/75 to-black/35 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:transition-all group-hover:duration-[2s]"></div>
      <aside className="absolute bottom-0 w-full p-4 invisible group-hover:visible">
        <span className="bg-gradient-to-r from-primary-green to-tertiary-green px-2 rounded-lg text-sm">
          {type}
        </span>
        <h1 className="text-lg font-bold text-primary-white mb-1">{title}</h1>
        <p className="text-sm text-primary-white mb-2">{description}</p>
        <p className="text-sm font-bold bg-gradient-to-r text-transparent from-primary-green via-second-green to-tertiary-green bg-clip-text inline-block">
          Tecnologias: {technologies}
        </p>
      </aside>
    </div>
  );
}
