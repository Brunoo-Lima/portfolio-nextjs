import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

import { Footer } from "@/components/layouts/(portfolio)/Footer";
import { ServicesHeader } from "@/components/layouts/(services)/header/ServicesHeader";
import { routing } from "@/i18n/routing";

export default async function ServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  if (locale !== "pt-br") {
    notFound();
  }

  return (
    <>
      <ServicesHeader />
      <main className="mt-24 pt-4 pb-0 relative">{children}</main>
      <Footer />
    </>
  );
}
