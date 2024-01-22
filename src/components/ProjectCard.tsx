import Link from 'next/link';
import Image from 'next/image';

import External from '../../public/assets/network/external.svg';

type ProjectCardProps = {
  imgUrl: string;
  href: string;
  type: string;
  title: string;
  description: string;
};

export function ProjectCard({
  imgUrl,
  href,
  type,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div
      className="lg:w-[450px] w-full lg:h-[350px] md:h-[400px] h-[250px]  group relative rounded-md border border-gray-800 md:mt-0 mt-4"
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

        <button className="bg-primary-white py-2 px-3 rounded-sm border-none hover:scale-105 transition duration-300">
          <Link
            href={href}
            target="blank"
            className="text-sm text-primary-black flex gap-1 items-center"
          >
            Visualizar
            <Image
              src={External}
              alt="Icone de link externo"
              className="w-4 h-4"
            />
          </Link>
        </button>
      </aside>
    </div>
  );
}
