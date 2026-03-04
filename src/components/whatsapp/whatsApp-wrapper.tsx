"use client";

import dynamic from "next/dynamic";

const WhatsApp = dynamic(() => import("./whatsApp"), {
  ssr: false,
});

export const WhatsAppWrapper = () => {
  return <WhatsApp />;
};
