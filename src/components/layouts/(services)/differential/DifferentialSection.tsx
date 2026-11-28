import { DifferentialWrapper } from "./DifferentialWrapper";

export const DifferentialSection = () => {
  return (
    <section className="py-24 sm:overflow-hidden bg-on-primary">
      <div className="container mx-auto md:px-12 px-8">
        <h2 className="text-4xl md:text-5xl leading-[1.03] font-service-secondary">
          Diferenciais
        </h2>

        <DifferentialWrapper />
      </div>
    </section>
  );
};
