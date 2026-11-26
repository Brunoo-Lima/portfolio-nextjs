import {
  phoneNumber,
  whatsappMessages,
  type WhatsAppMessageType,
} from "@/constants/whatsapp";

export const getWhatsAppUrl = (
  type: WhatsAppMessageType = "portfolio",
): string => {
  const message = encodeURIComponent(whatsappMessages[type]);

  return `https://wa.me/${phoneNumber}?text=${message}`;
};
