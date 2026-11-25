import { ArrowUpRightIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="px-6 pb-24 sm:px-10 sm:pb-32 md:px-12">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 overflow-hidden rounded-3xl border border-second-green/20 bg-[#101714] px-7 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-end">
        <div className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full bg-second-green/10 blur-3xl" />
        <div className="relative">
          <p className="mb-5 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
            06 / Vamos conversar
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Vamos construir seu próximo projeto?
          </h2>
        </div>
        <a
          href="https://wa.me/5511911908708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20solicitar%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex min-h-14 shrink-0 items-center gap-5 rounded-full bg-second-green px-6 font-semibold text-primary-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-second-green"
        >
          Solicitar orçamento
          <ArrowUpRightIcon
            className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};
