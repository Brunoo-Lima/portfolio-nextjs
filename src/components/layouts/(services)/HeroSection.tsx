import { ArrowDownIcon } from "lucide-react";

import { WhatsAppIcon2 } from "@/components/icons/WhatsappIcon2";
import { LinkButtonService } from "@/components/ui/button/LinkButtonService";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden md:mt-9 md:mb-36 pt-20 pb-24 lg:px-12 px-8 mx-auto container">
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
        <div>
          <div className="mb-8 flex items-center gap-3 font-service text-xs uppercase tracking-[0.16em] text-foreground">
            <span className="h-px w-8 bg-primary" />
            <p>Serviços digitais · Bruno Lima</p>
          </div>

          <h1 className="max-w-4xl text-5xl leading-[1.03] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-service-secondary">
            Transformo ideias em experiências digitais.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            Sites profissionais, modernos e rápidos para empresas que desejam
            crescer na internet.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 lg:items-end lg:pb-2">
          <LinkButtonService href={getWhatsAppUrl("budget")}>
            Solicitar orçamento
            <WhatsAppIcon2 />
          </LinkButtonService>

          <a
            href="#servicos"
            className="inline-flex items-center gap-3 text-sm text-muted transition hover:text-foreground"
          >
            Explore os serviços
            <ArrowDownIcon
              className="size-4 animate-bounce"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div className="relative mt-16 flex items-center gap-3 border-t border-foreground/10 pt-5 font-service text-[.625rem] uppercase tracking-[0.2em] text-muted/90 sm:mt-24">
        <span className="size-2 rounded-full bg-primary" />
        <p>Ideias, design e desenvolvimento em um só lugar</p>
      </div>
    </section>
  );
};
