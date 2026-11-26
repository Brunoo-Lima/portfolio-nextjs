interface IDifferentialCardProps {
  differential: any;
}
export const DifferentialCard = ({ differential }: IDifferentialCardProps) => {
  return (
    <div className="flex flex-col gap-y-4 border rounded-2xl p-7 border-border h-50">
      <div className="shrink-0">{differential.icon}</div>

      <div className="mt-auto flex flex-col gap-y-2">
        <strong className="font-semibold">{differential.title}</strong>
        <p className="text-sm text-muted">{differential.description}</p>
      </div>
    </div>
  );
};
