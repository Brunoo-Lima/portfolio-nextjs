import { workStagesList } from "@/mocks/workStagesList";

import { Stage } from "./Stage";

export const WorkStages = () => {
  return (
    <section className="md:mt-9 md:mb-36 pt-20 pb-24 sm:overflow-hidden container mx-auto md:px-12 px-8">
      <h2 className="text-3xl font-secondary">Processo de trabalho</h2>

      <div className="mt-20 flex flex-col gap-y-6">
        {workStagesList.map((stage) => (
          <Stage key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  );
};
