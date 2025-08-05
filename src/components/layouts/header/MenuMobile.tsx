import { NavLink } from './NavLink';
import { NavLinksProps } from './Header';

type IMenuMobileProps = {
  links: Array<NavLinksProps>;
};

export function MenuMobile({ links }: IMenuMobileProps) {
  return (
    <ul className="md:hidden flex flex-col pt-16 px-4 text-center transition-all duration-500 ease-in-out absolute bg-[#0f0f0f] h-screen w-screen z-50 ">
      {links.map((link) => (
        <li
          key={link.id}
          className="text-2xl mb-4 rounded-sm transition-all duration-300"
        >
          <NavLink title={link.title} />
        </li>
      ))}
    </ul>
  );
}
