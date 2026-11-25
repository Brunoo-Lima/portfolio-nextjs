import { differentialsList } from "@/mocks/differentialsList";

import { DifferentialCard } from "./DifferentialCard";

export const DifferentialSection = () => {
  return (
    <section className="md:mt-9 md:mb-36 pt-20 pb-24 sm:overflow-hidden container mx-auto md:px-12 px-8">
      <h2 className="text-3xl font-secondary">Diferenciais</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center mt-20">
        {differentialsList.map((differential) => (
          <DifferentialCard key={differential.id} differential={differential} />
        ))}
      </div>
    </section>
  );
};
