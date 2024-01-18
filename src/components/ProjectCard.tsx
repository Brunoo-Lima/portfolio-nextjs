import Link from 'next/link';

type ProjectCardProps = {
  imgUrl: string;
  href: string;
  title: string;
  description: string;
  technologies: string;
};

export function ProjectCard({
  imgUrl,
  href,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="lg:w-[450px] w-full h-[350px] group relative rounded-md border border-gray-800"
      style={{
        background: `url(${imgUrl})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all hover:duration-500"></div>
      <aside className="absolute bottom-0 w-full p-4 invisible group-hover:visible bg-black transition duration-1000">
        <h1 className="text-lg font-bold text-primary-white mb-2">{title}</h1>
        <p className="text-sm text-white mb-2">{description}</p>
        <p className="text-sm font-bold bg-gradient-to-r text-transparent from-primary-green via-second-green to-tertiary-green bg-clip-text inline-block">
          Tecnologias: {technologies}
        </p>
      </aside>
    </Link>
  );
}
