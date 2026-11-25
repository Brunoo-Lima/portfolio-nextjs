import { ArrowUpRightIcon } from "lucide-react";
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
    <a
      href="https://wa.me/5511911908708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conversar%20sobre%20um%20projeto."
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-56 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-second-green/50 hover:bg-second-green/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-second-green"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-second-green/10 text-second-green transition group-hover:bg-second-green group-hover:text-primary-black [&_svg]:size-5">
          {service.icon}
        </span>
        <span className="font-secondary text-xs text-white/30">
          0{service.id}
        </span>
      </div>
      <div className="mt-10 flex items-end justify-between gap-3">
        <p className="text-lg font-medium tracking-tight text-white sm:text-xl">
          {service.service}
        </p>
        <ArrowUpRightIcon
          className="mb-1 size-4 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-second-green"
          aria-hidden="true"
        />
      </div>
    </a>
  );
};
