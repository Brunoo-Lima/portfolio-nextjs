import { differentialsList } from "@/mocks/differentialsList";

import { DifferentialCard } from "./DifferentialCard";

export const DifferentialSection = () => {
  return (
    <section className="py-24 sm:overflow-hidden bg-on-primary">
      <div className="container mx-auto md:px-12 px-8">
        <h2 className="text-4xl md:text-5xl leading-[1.03] font-service-secondary">
          Diferenciais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[repeat(4,1fr)] gap-4 place-content-center mt-16">
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
