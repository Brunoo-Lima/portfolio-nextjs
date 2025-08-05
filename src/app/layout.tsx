import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layouts/header/Header';
import { Footer } from '@/components/layouts/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getUserLocale } from '@/actions/locale';
import { Toaster } from 'sonner';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfólio',
  description:
    'Desenvolvedor web especializado em criar sites modernos, responsivos e otimizados para SEO. Confira meus projetos e habilidades em front-end.',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: IRootLayoutProps) {
  const locale = await getUserLocale();
  return (
    <html lang={locale}>
      <body
        className={`${roboto.className} bg-primary-black text-primary-white antialiased scrollbar-thumb-emerald-500 scrollbar-track-primary-black scrollbar-thin`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <Toaster richColors />
      </body>
    </html>
  );
}
