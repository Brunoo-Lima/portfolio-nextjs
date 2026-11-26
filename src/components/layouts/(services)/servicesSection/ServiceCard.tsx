import { ArrowUpRightIcon } from "lucide-react";
import { ReactNode } from "react";

interface IServiceCardProps {
  service: {
    id: number;
    service: string;
    icon: ReactNode;
    href: string;
  };
}
export const ServiceCard = ({ service }: IServiceCardProps) => {
  return (
    <div className="h-40 border rounded-md border-border transition duration-300 hover:scale-105 cursor-pointer group hover:border-primary">
      <a
        href={service.href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex h-full w-full flex-col gap-y-2 p-5"
      >
        <div className="size-10 p-1 bg-primary-start flex justify-center items-center rounded-md *:shrink-0 transition-colors group-hover:bg-primary">
          {service.icon}
        </div>

        <div className="mt-auto flex justify-between gap-2">
          <p className="font-semibold">{service.service}</p>
          <ArrowUpRightIcon
            className="size-5 transition-transform group-hover:-translate-y-0.5
            translate-y-0 group-hover:text-primary shrink-0"
            aria-hidden={true}
          />
        </div>
      </a>
    </div>
  );
};
