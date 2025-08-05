import { Link } from 'react-scroll';

type NavLinkProps = {
  id: string;
  label: string;
};

export const NavLink = ({ label, id }: NavLinkProps) => {
  return (
    <Link
      to={id}
      smooth={true}
      offset={-100}
      duration={500}
      className="block py-2 pl-3 pr-4 text-white md:text-lg rounded md:p-0 hover:text-second-green transition duration-300 hover:cursor-pointer relative link-menu"
    >
      {label}
    </Link>
  );
};
