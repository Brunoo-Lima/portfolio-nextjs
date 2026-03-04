import Link from "next/link";
type NavLinkProps = {
  id: string;
  label: string;
};

export const NavLink = ({ label, id }: NavLinkProps) => {
  return (
    <Link
      href={`#${id}`}
      className="block py-2 pl-3 pr-4 text-white md:text-base rounded md:p-0 hover:text-second-green transition duration-300 hover:cursor-pointer relative link-menu font-secondary"
    >
      {label}
    </Link>
  );
};
