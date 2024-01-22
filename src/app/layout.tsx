import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio para me conhecerem e apresentar meus projetos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} bg-primary-black text-primary-white antialiased scrollbar-thumb-emerald-500 scrollbar-track-primary-black scrollbar-thin`}
      >
        {children}
      </body>
    </html>
  );
}
