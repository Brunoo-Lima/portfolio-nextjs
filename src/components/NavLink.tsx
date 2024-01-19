import Link from 'next/link';

type NavLinkProps = {
  href: string;
  title: string;
};

export function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 hover:text-second-green transition duration-300"
    >
      {title}
    </Link>
  );
}
