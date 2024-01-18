import Image from 'next/image';

type ProjectCardProps = {
  imgUrl: string;
  altText: string;
  title: string;
  description: string;
  technologies: string;
};

export function ProjectCard({
  imgUrl,
  altText,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="relative group ">
      <Image
        src={imgUrl}
        alt={altText}
        width={600}
        height={400}
        className="relative brightness-90"
      />

      <div className="absolute bg-gradient-to-b from-white to-black"></div>

      <div className="absolute bottom-0 invisible group-hover:visible bg-black/45  shadow-black">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Tecnologias: {technologies}</p>
      </div>
    </div>
  );
}
