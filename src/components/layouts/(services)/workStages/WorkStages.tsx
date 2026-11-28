import Image from "next/image";

import { workStagesList } from "@/mocks/workStagesList";

import { Stage } from "./Stage";

export const WorkStages = () => {
  return (
    <section className="py-24 container mx-auto md:px-12 px-8">
      <h2 className="text-4xl md:text-5xl leading-[1.03] font-service-secondary">
        Processo de trabalho
      </h2>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="flex flex-col gap-y-8">
          {workStagesList.map((stage) => (
            <Stage key={stage.id} stage={stage} />
          ))}
        </div>

        <div className="relative isolate w-full">
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -inset-10 -z-10
              bg-[radial-gradient(circle,#818cf8_1px,transparent_1px)]
              bg-size-[20px_20px]
              mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
              opacity-20
            "
          />

          <Image
            src="/img/workflow.svg"
            alt="Processo de desenvolvimento"
            width={760}
            height={675}
            className="mx-auto h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};
