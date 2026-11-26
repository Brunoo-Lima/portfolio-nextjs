import { WhatsAppIcon2 } from "@/components/icons/WhatsappIcon2";
import { LinkButtonService } from "@/components/ui/button/LinkButtonService";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export const ContactCTA = () => {
  return (
    <div className="absolute z-20 -bottom-28 left-1/2 -translate-x-1/2 w-[90%] h-50 sm:h-56 sm:max-w-150 md:h-64 md:max-w-3xl lg:h-72 lg:max-w-4xl border border-primary rounded-4xl bg-background lg:p-16 p-8 flex flex-col gap-4">
      <h2 className="text-3xl md:text-5xl self-start font-service-secondary max-w-96">
        Vamos construir seu próximo projeto?
      </h2>

      <LinkButtonService
        classNameCustom="self-end mt-auto"
        href={getWhatsAppUrl("budget")}
      >
        Solicitar orçamento
        <WhatsAppIcon2 />
      </LinkButtonService>
    </div>
  );
};
