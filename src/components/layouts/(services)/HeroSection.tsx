import { ArrowUpRightIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="md:mt-9 md:mb-36 pt-20 pb-24 sm:overflow-hidden container mx-auto md:px-12 px-8">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-4xl font-secondary">
          Transformo ideias em experiências digitais.
        </h1>
        <p className="text-white/80">
          Sites profissionais, modernos e rápidos para empresas que desejam
          crescer na internet.
        </p>

        <a
          href=""
          className="mt-4 inline-flex gap-2 border max-w-max px-3 py-2 rounded-md font-bold"
        >
          Solicitar orçamento
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
};
