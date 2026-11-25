"use client";

import { useTranslations } from "next-intl";

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

export const ServicesHeader = () => {
  const t = useTranslations("ServiceHeader");

  return (
    <header className="fixed top-0 left-0 right-0 z-30 mx-auto bg-primary-black/50 border-b border-gray-800 backdrop-blur-sm backdrop-saturate-50">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex fle-wrap items-center justify-between mx-auto p-8 container">
          <Reveal variants={slideFromLeft(0.2)}>
            <Logo />
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
    </header>
  );
};
