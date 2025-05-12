import { IProject } from '@/@types/IProject';
import { ButtonView } from '@/components/ui/button/ButtonView';
import { MaskCard } from '@/components/ui/MaskCard/MaskCard';

type ProjectCardProps = {
  project: IProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="lg:w-[450px] w-full lg:h-[350px] md:h-[400px] h-[250px] group relative rounded-lg border border-gray-800 md:mt-0 mt-4 transition-all duration-500 overflow-hidden"
      style={{
        background: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <MaskCard />
      <aside className="absolute bottom-0 w-full p-4 invisible group-hover:visible">
        <span className="bg-gradient-to-r from-primary-green to-tertiary-green py-0.5 px-2 rounded-lg text-sm">
          {project.type}
        </span>

        <h1 className="text-lg font-bold text-primary-white mb-1">
          {project.title}
        </h1>

        <p className="text-sm text-primary-white mb-2">{project.description}</p>

        <ButtonView textTooltip="Visualizar projeto" href={project.href} />
      </aside>
    </div>
  );
}
