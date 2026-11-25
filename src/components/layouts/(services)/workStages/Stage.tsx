import { IStage } from "@/@types/IStage";

interface IStageProps {
  stage: IStage;
}

export const Stage = ({ stage }: IStageProps) => {
  return (
    <article className="flex min-h-52 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-second-green/35">
      <span className="mb-10 font-secondary text-sm text-second-green">
        {stage.stage}
      </span>
      <div>
        <strong className="text-lg font-semibold tracking-tight">
          {stage.title}
        </strong>
        <p className="mt-2 text-sm leading-6 text-white/55">
          {stage.description}
        </p>
      </div>
    </article>
  );
};
