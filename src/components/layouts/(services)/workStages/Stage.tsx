import { IStage } from "@/@types/IStage";

interface IStageProps {
  stage: IStage;
}

export const Stage = ({ stage }: IStageProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-4 border-b border-border/50 pb-6 last:border-0">
      <span className="flex size-11 items-center justify-center rounded-lg border border-[#818cf8]/20 bg-[#818cf8]/10 font-semibold text-primary">
        {stage.stage}
      </span>

      <div className="flex flex-col gap-y-1">
        <strong className="text-lg font-semibold">{stage.title}</strong>
        <p className="text-muted leading-relaxed">{stage.description}</p>
      </div>
    </div>
  );
};
