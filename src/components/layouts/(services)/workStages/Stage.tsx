import { IStage } from "@/@types/IStage";

interface IStageProps {
  stage: IStage;
}

export const Stage = ({ stage }: IStageProps) => {
  return (
    <div className="grid grid-cols-[80px,1fr] gap-2">
      <span
        className="self-center justify-self-start font-bold text-lg
          "
      >
        {stage.stage}
      </span>

      <div>
        <strong>{stage.title}</strong>
        <p>{stage.description}</p>
      </div>
    </div>
  );
};
