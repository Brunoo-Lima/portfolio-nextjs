interface ICardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

export const Card = ({ description, title, icon, isActive }: ICardProps) => {
  return (
    <div
      className="
        flex items-center gap-4 md:gap-8
        max-w-[543px] min-h-31.75
        py-4 px-4 md:px-5.25 rounded-[25px]
        max-[968px]:max-w-[543px]
        max-[568px]:max-w-full
      "
    >
      <div
        className="
          flex items-center justify-center
          size-12 md:size-15 shrink-0 rounded-4xl
          bg-primary-start border border-primary text-foreground *:md-size-8 *:size-6
        "
      >
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className={`text-lg md:text-xl font-semibold leading-normal ${
            isActive ? "text-foregorund" : "text-muted/30"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm md:text-base leading-[1.4rem] ${
            isActive ? "text-foreground/60" : "text-muted/50"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
