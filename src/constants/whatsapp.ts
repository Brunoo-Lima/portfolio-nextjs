export const phoneNumber = "5511911908708";

export const whatsappMessages = {
  budget: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
  project: "Olá! Vim pelo site e gostaria de conversar sobre um projeto.",
  portfolio: "Olá! Vim pelo portfólio.",

  landing:
    "Olá! Tenho interesse no desenvolvimento de uma landing page e gostaria de solicitar um orçamento.",
  site: "Olá! Gostaria de desenvolver um site institucional para meu negócio. Podemos conversar?",
  system:
    "Olá! Preciso desenvolver um sistema personalizado e gostaria de conversar sobre meu projeto.",
  maintenance:
    "Olá! Preciso de manutenção ou melhorias em um site existente. Gostaria de saber mais sobre seus serviços.",
} as const;

export type WhatsAppMessageType = keyof typeof whatsappMessages;
