import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { WhatsAppWrapper } from "@/components/whatsapp/whatsApp-wrapper";
import { routing } from "@/i18n/routing";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface ILocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: ILocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${font__primary.variable} ${font__secondary.variable} bg-primary-black text-primary-white antialiased scrollbar-thumb-emerald-500 scrollbar-track-primary-black scrollbar-thin`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>

        <WhatsAppWrapper />
      </body>
    </html>
  );
}
