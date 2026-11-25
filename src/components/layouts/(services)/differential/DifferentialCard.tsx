interface IDifferentialCardProps {
  differential: any;
}
export const DifferentialCard = ({ differential }: IDifferentialCardProps) => {
  return (
    <div className="flex flex-col gap-y-2 border rounded-md px-4 py-3 border-gray-700">
      {differential.icon}
      <strong>{differential.title}</strong>
      <p>{differential.description}</p>
    </div>
  );
};
