import { ArrowDownIcon, ArrowUpRightIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pb-24 pt-32 sm:px-10 md:px-12 md:pb-36 md:pt-40">
      <div className="pointer-events-none absolute -right-32 top-20 size-[27rem] rounded-full bg-second-green/10 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
        <div>
          <div className="mb-8 flex items-center gap-3 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
            <span className="h-px w-8 bg-second-green" />
            Serviços digitais · Bruno Lima
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.03] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Transformo ideias em{" "}
            <span className="text-second-green">experiências</span> digitais.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Sites profissionais, modernos e rápidos para empresas que desejam
            crescer na internet.
          </p>
        </div>
        <div className="flex flex-col items-start gap-8 lg:items-end lg:pb-2">
          <a
            href="https://wa.me/5511911908708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-14 items-center gap-6 rounded-full bg-second-green px-6 font-semibold text-primary-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-second-green"
          >
            Solicitar orçamento
            <ArrowUpRightIcon
              className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-3 text-sm text-white/55 transition hover:text-white"
          >
            Explore os serviços
            <ArrowDownIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="relative mt-16 flex items-center gap-3 border-t border-white/10 pt-5 font-secondary text-[10px] uppercase tracking-[0.2em] text-white/40 sm:mt-24">
        <span className="size-2 rounded-full bg-second-green" />
        Ideias, design e desenvolvimento em um só lugar
      </div>
    </section>
  );
};
