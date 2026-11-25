import { Link } from "@/i18n/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export const NavLink = ({ label, href, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 pl-3 pr-4 text-foreground md:text-base rounded md:p-0 hover:text-primary transition duration-300 hover:cursor-pointer relative link-menu font-secondary"
    >
      {label}
    </Link>
  );
};
