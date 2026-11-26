import { Link } from "@/i18n/navigation";

interface ILogoProps {
  href: string;
}

export const Logo = ({ href }: ILogoProps) => {
  return (
    <Link
      href={href}
      className="cursor-pointer text-3xl md:text-4xl font-semibold inline-block text-transparent bg-linear-to-r from-primary-start to-primary-end bg-clip-text"
    >
      ❮BL/❯
    </Link>
  );
};
