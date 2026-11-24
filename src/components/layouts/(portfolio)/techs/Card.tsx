import { ITech } from "@/@types/ITech";

type ICardProps = {
  tech: ITech;
};

export const Card = ({ tech }: ICardProps) => {
  return (
    <div className="bg-second-black flex flex-col items-center justify-center gap-y-3 border border-primary-gray rounded-sm h-[134px] w-full p-4 transition duration-1000 ease-linear hover:border-primary-white relative">
      <div className="size-24 flex items-center justify-center *:size-12">
        {tech.icon}
      </div>

      <small className="text-xs text-white/80">{tech.name}</small>
    </div>
  );
};
