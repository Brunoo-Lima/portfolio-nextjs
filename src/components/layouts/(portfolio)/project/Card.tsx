import { IProject } from "@/@types/IProject";
import { ButtonView } from "@/components/ui/button/ButtonView";
import { MaskCard } from "@/components/ui/MaskCard/MaskCard";

type ICardProps = {
  project: IProject;
};

export const Card = ({ project }: ICardProps) => {
  return (
    <div
      className="lg:w-[450px] w-full lg:h-[350px] md:h-[400px] h-[250px] group relative rounded-lg border border-gray-800 md:mt-0 mt-4 transition-all duration-500 overflow-hidden"
      style={{
        background: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <MaskCard />
      <aside className="absolute bottom-0 w-full p-4 invisible group-hover:visible">
        <span className="bg-accent font-semibold text-background py-0.5 px-2 rounded-lg text-sm">
          {project.type}
        </span>

        <h3 className="text-lg font-bold text-foreground mb-1 mt-1 font-secondary">
          {project.title}
        </h3>

        <p className="text-sm text-foreground mb-2 leading-normal">
          {project.description}
        </p>

        <ButtonView
          textTooltip={project.view}
          text={project.view}
          href={project.href}
        />
      </aside>
    </div>
  );
};
