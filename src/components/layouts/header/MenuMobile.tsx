import { useLocale } from 'next-intl';

import { NavLinksProps } from './Header';
import { NavLink } from './NavLink';
import { SwitcherLanguage } from './SwitcherLanguage';

type IMenuMobileProps = {
  links: Array<NavLinksProps>;
  t: any;
};

export const MenuMobile = ({ links, t }: IMenuMobileProps) => {
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
};
