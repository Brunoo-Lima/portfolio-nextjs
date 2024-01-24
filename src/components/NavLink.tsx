import { Link } from 'react-scroll';

type NavLinkProps = {
  title: string;
};

export function NavLink({ title }: NavLinkProps) {
  return (
    <Link
      to={title}
      smooth={true}
      offset={-100}
      duration={500}
      className="block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 hover:text-second-green transition duration-300 hover:cursor-pointer"
    >
      {title}
    </Link>
  );
}
