"use client";

import { useTranslations } from "next-intl";

import { HeaderContainer } from "@/components/ui/header-container";
import { Logo } from "@/components/ui/logo";
import {
  slideFromLeft,
  slideFromRight,
  visibleFromOpacityZero,
} from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { NavLink } from "./NavLink";

export type NavLinksProps = {
  title: string;
  id: number;
  href: string;
};

const navLinks: NavLinksProps[] = [
  { id: 1, title: "services", href: "#" },
  { id: 2, title: "projects", href: "#projects" },
];

export const HeaderService = () => {
  const t = useTranslations("ServiceHeader");

  return (
    <HeaderContainer>
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex fle-wrap items-center justify-between mx-auto p-8 container">
          <Reveal variants={slideFromLeft(0.2)}>
            <Logo href="/servicos" />
          </Reveal>

          <div
            className="hidden lg:flex md:items-center md:space-x-6 md:w-auto"
            id="navbar"
          >
            <Reveal variants={slideFromRight(0.2)}>
              <ul className="flex gap-4 items-center md:flex-row md:space-x-3 mt-0">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink href={link.href} label={t(link.title)} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </HeaderContainer>
  );
};
