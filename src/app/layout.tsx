import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { getUserLocale } from "@/actions/locale";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/header/Header";
import { WhatsAppWrapper } from "@/components/whatsapp/whatsApp-wrapper";

const font__primary = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-primary",
});

const font__secondary = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Portfólio | Bruno Lima",
  description:
    "Desenvolvedor web especializado em criar sites modernos, responsivos e otimizados para SEO. Confira meus projetos e habilidades em front-end.",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: IRootLayoutProps) {
  const locale = await getUserLocale();
  return (
    <html lang={locale}>
      <body
        className={`${font__primary.variable} ${font__secondary.variable} bg-primary-black text-primary-white antialiased scrollbar-thumb-emerald-500 scrollbar-track-primary-black scrollbar-thin`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <WhatsAppWrapper />
      </body>
    </html>
  );
}
