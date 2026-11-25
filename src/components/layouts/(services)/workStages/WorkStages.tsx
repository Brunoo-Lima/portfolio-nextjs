import { workStagesList } from "@/mocks/workStagesList";

import { Stage } from "./Stage";

export const WorkStages = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 md:px-12">
      <div className="mb-14 max-w-2xl sm:mb-16">
        <p className="mb-4 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
          04 / Do início ao lançamento
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Processo de trabalho
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {workStagesList.map((stage) => (
          <Stage key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  );
};
