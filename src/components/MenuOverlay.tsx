import { NavLink } from './NavLink';
import { NavLinksProps } from './Navbar';

type MenuOverlayProps = {
  links: Array<NavLinksProps>;
};

export function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 text-center px-3">
      {links.map((link, index) => (
        <li
          key={index}
          className="hover:bg-primary-gray/35 rounded-sm transition duration-300"
        >
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
