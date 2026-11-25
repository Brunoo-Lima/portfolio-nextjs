import { ITech } from "@/@types/ITech";

type ICardProps = {
  tech: ITech;
};

export const Card = ({ tech }: ICardProps) => {
  return (
    <div className="bg-background/70 flex flex-col items-center justify-center gap-y-3 border border-border rounded-sm h-33.5 w-full p-4 transition duration-1000 ease-linear hover:border-foreground relative">
      <div className="size-24 flex items-center justify-center *:size-12">
        {tech.icon}
      </div>

      <small className="text-xs text-foreground/80">{tech.name}</small>
    </div>
  );
};
