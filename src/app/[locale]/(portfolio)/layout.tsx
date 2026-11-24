import { Footer } from "@/components/layouts/(portfolio)/Footer";
import { Header } from "@/components/layouts/(portfolio)/header/Header";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mt-24 pt-4 pb-0 relative">{children}</main>
      <Footer />
    </>
  );
}
