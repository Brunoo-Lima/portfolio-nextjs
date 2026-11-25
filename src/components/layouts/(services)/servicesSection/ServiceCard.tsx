import { ReactNode } from "react";

interface IServiceCardProps {
  service: {
    id: number;
    service: string;
    icon: ReactNode;
  };
}
export const ServiceCard = ({ service }: IServiceCardProps) => {
  return (
    <div className="flex flex-col gap-y-2 border rounded-md px-4 py-3 border-gray-700">
      {service.icon}
      <p>{service.service}</p>
    </div>
  );
};
