import { ArrowUpRightIcon } from "lucide-react";

import { servicesList } from "@/mocks/servicesList";

import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <section
      id="servicos"
      className="border-y border-white/10 bg-[#0a0d0c] py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        <div className="mb-14 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
              01 / O que faço
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Como posso ajudar seu negócio
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            Soluções digitais pensadas para aproximar sua marca das pessoas.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <a
          href="https://wa.me/5511911908708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-second-green"
        >
          Vamos conversar sobre seu projeto{" "}
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
