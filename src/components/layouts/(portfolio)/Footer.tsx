"use client";

import { ArrowUpIcon } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTopTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="border-t border-t-primary/40 ">
      <div className="container px-12 py-8 mx-auto">
        <div className="flex justify-between items-center md:flex-row flex-col">
          <p className="md:order-0 order-last md:mt-0 mt-4">
            © {year} <strong>Bruno Lima. </strong>{" "}
            <span className="text-muted">Todos os direitos reservados.</span>
          </p>

          <button
            className="flex items-center gap-2 hover:cursor-pointer mr-6"
            onClick={scrollTopTop}
            title="Voltar ao topo"
          >
            <p className="md:hidden block">Voltar ao topo</p>
            <ArrowUpIcon
              color="#818cf8"
              className="size-8 animate-bounce transition duration-300 bg-background border border-primary/40 rounded-full p-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
