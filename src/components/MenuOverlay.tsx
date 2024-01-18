import { NavLink } from './NavLink';
import { NavLinksProps } from './Navbar';

type MenuOverlayProps = {
  links: Array<NavLinksProps>;
};

export function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
