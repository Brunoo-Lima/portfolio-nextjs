import { NavLink } from './nav-link';
import { NavLinksProps } from './header';
import { SwitcherLanguage } from './switcher-language';
import { useLocale } from 'next-intl';

type MenuOverlayProps = {
  links: Array<NavLinksProps>;
  t: any;
};

export function MenuOverlay({ links, t }: MenuOverlayProps) {
  const locale = useLocale();
  return (
    <div className="md:hidden absolute bg-[#0f0f0f] h-screen w-full z-50">
      <ul className="flex flex-col pt-16 px-4 text-center transition-all duration-500 ease-in-out">
        {links.map((link) => (
          <li
            key={link.id}
            className="text-2xl mb-4 rounded-sm transition-all duration-300"
          >
            <NavLink id={link.title} label={t(link.title)} />
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center *:gap-4 mt-10 *:flex-row">
        <SwitcherLanguage defaultValue={locale} />
      </div>
    </div>
  );
}
