import { differentialsList } from "@/mocks/differentialsList";

import { DifferentialCard } from "./DifferentialCard";

export const DifferentialSection = () => {
  return (
    <section className="border-y border-white/10 bg-[#0a0d0c] py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="mb-4 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
            03 / O cuidado
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Diferenciais
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {differentialsList.map((differential) => (
            <DifferentialCard
              key={differential.id}
              differential={differential}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
