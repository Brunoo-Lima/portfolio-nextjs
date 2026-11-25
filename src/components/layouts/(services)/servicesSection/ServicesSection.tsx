import { servicesList } from "@/mocks/servicesList";

import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <section className="sm:overflow-hidden py-24 bg-[#111111]">
      <div className="mx-auto container md:px-12 px-8 ">
        <h2 className="text-3xl font-secondary">
          Como posso ajudar seu negócio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center mt-20">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
