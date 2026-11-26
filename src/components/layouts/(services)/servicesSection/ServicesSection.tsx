import { ArrowUpRightIcon } from "lucide-react";

import { servicesList } from "@/mocks/servicesList";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <section className="sm:overflow-hidden py-24 bg-on-primary">
      <div className="mx-auto container lg:px-12 px-8">
        <div className="flex flex-wrap justify-between gap-4">
          <h2 className="text-4xl md:text-5xl leading-[1.03] font-service-secondary">
            Como posso ajudar seu negócio
          </h2>

          <p className="max-w-60 text-sm text-muted leading-snug self-end">
            Soluções digitais pensadas para aproximar sua marca das pessoas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center mt-12 lg:mt-20">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <a
          href={getWhatsAppUrl("project")}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-max mt-8 inline-flex items-center font-service gap-x-2 text-sm text-muted transition duration-300 hover:text-foreground"
        >
          Vamos conversar sobre seu projeto{" "}
          <ArrowUpRightIcon className="size-5" aria-hidden={true} />
        </a>
      </div>
    </section>
  );
};
