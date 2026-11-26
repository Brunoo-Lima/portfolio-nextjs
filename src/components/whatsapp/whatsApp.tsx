import { WhatsAppIcon } from "@/components/icons";
import { phoneNumber, urlWhatsPortfolio } from "@/utils/whatsapp";

const WhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${urlWhatsPortfolio}`}
      target="_blank"
      title="WhatsApp"
      rel="noopener noreferrer nofollow"
      className="fixed bottom-6 right-6 z-50 fade--in"
    >
      <span className="relative flex items-center justify-center size-16">
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-70 transition duration-500"></span>

        <span className="relative flex items-center justify-center size-16 rounded-full bg-[#25D366] hover:scale-105 transition duration-300">
          <WhatsAppIcon width="28px" height="28px" />
        </span>
      </span>
    </a>
  );
};

export default WhatsApp;
