interface IDifferentialCardProps {
  differential: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

export const DifferentialCard = ({ differential }: IDifferentialCardProps) => {
  return (
    <article className="flex min-h-60 flex-col rounded-2xl border border-white/10 bg-[#111614] p-6 transition duration-300 hover:border-second-green/35 hover:bg-[#141b18]">
      <div className="mb-9 flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-second-green/10 text-second-green [&_svg]:size-5">
          {differential.icon}
        </span>
        <span className="font-secondary text-xs text-white/30">
          0{differential.id}
        </span>
      </div>
      <strong className="text-base font-semibold tracking-tight">
        {differential.title}
      </strong>
      <p className="mt-3 text-sm leading-6 text-white/55">
        {differential.description}
      </p>
    </article>
  );
};
