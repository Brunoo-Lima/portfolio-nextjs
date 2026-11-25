export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="container mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 md:px-12"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="mb-4 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
            02 / Na prática
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Projetos entregues
          </h2>
        </div>
        <span className="hidden font-secondary text-xs text-white/40 sm:block">
          Seleção de projetos
        </span>
      </div>
      <div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#101614] p-7 sm:min-h-[340px] sm:p-10">
        <div
          className="absolute inset-0 opacity-70 transition duration-500 group-hover:scale-[1.02]"
          aria-hidden="true"
        >
          <div className="absolute -right-12 -top-24 size-80 rounded-full border border-second-green/20" />
          <div className="absolute -right-2 -top-14 size-64 rounded-full border border-second-green/20" />
          <div className="absolute right-10 top-0 h-full w-px bg-second-green/10" />
          <div className="absolute right-0 top-1/2 h-px w-2/3 bg-second-green/10" />
          <div className="absolute bottom-8 right-12 grid size-40 place-items-center rounded-full border border-second-green/20 bg-second-green/[0.04] sm:right-24 sm:size-56">
            <div className="grid size-28 place-items-center rounded-full border border-second-green/30 font-secondary text-3xl text-second-green sm:size-40 sm:text-5xl">
              P
            </div>
          </div>
        </div>
        <div className="relative flex min-h-[230px] flex-col justify-between sm:min-h-[260px]">
          <span className="w-fit rounded-full border border-white/15 px-3 py-1.5 font-secondary text-[10px] uppercase tracking-[0.16em] text-white/55">
            Projeto em destaque
          </span>
          <div>
            <strong className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Pilates
            </strong>
            <p className="mt-2 text-sm text-white/50">Projeto digital</p>
          </div>
        </div>
      </div>
    </section>
  );
};
