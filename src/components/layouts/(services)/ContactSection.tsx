import { ArrowUpRightIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 h-full bg-[#111111]">
      <div className="flex flex-col gap-y-10 justify-center items-center md:px-12 px-8  container mx-auto">
        <h2 className="text-3xl font-secondary">
          Vamos construir seu próximo projeto?
        </h2>
        <a
          href=""
          className="inline-flex gap-2 border max-w-max px-3 py-2 rounded-md font-bold bg-white text-black"
        >
          Solicitar orçamento
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
};
