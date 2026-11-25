"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Logo } from "@/components/ui/logo";
import {
  slideFromLeft,
  slideFromRight,
  visibleFromOpacityZero,
} from "@/utils/motion";
import { Reveal } from "@/utils/Reveal";

import { MenuMobile } from "./MenuMobile";
import { NavLink } from "./NavLink";
import { SwitcherLanguage } from "./SwitcherLanguage";

export type NavLinksProps = {
  title: string;
  id: number;
  href: string;
};

const navLinks: NavLinksProps[] = [
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "experience", href: "#experience" },
  { id: 3, title: "techs", href: "#techs" },
  { id: 4, title: "projects", href: "#projects" },
  { id: 5, title: "services", href: "/servicos" },
];

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const navbar = document.getElementById("navbar");
      const mobileMenu = document.getElementById("mobile-menu");

      if (
        navbarOpen &&
        navbar &&
        mobileMenu &&
        !navbar.contains(e.target as Node) &&
        !mobileMenu.contains(e.target as Node)
      ) {
        setNavbarOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navbarOpen]);

  const visibleNavLinks = navLinks.filter((link) => {
    if (link.href === "/servicos" && locale === "en") {
      return false;
    }

    return true;
  });

  function handleOpenNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-30 mx-auto bg-background/50 border-b border-gray-800 backdrop-blur-sm backdrop-saturate-50">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex fle-wrap items-center justify-between mx-auto p-8 container">
          <Reveal variants={slideFromLeft(0.2)}>
            <Logo />
          </Reveal>

          <div className="block lg:hidden" id="mobile-menu">
            <button
              type="button"
              onClick={handleOpenNavbar}
              className="group flex p-2 cursor-pointer items-center justify-center"
            >
              <div className="space-y-2">
                <span
                  className={`block h-px w-8 rounded-full bg-primary-white transition-transform ease-in-out duration-500 ${
                    !navbarOpen
                      ? "-translate-y-1.0"
                      : "transition-transform ease-in-out translate-y-2 -rotate-45"
                  }`}
                ></span>
                <span
                  className={`block h-px w-8 rounded-full bg-primary-white transition-opacity ease-in-out duration-500 ${
                    navbarOpen ? "opacity-0" : "translate-y-1.0 opacity-100"
                  } `}
                ></span>
                <span
                  className={`block h-px w-8 rounded-full bg-primary-white transition-transform ease-in-out duration-500 ${
                    !navbarOpen
                      ? "translate-y-1.0"
                      : "transition-transform ease-in-out -translate-y-2 rotate-45"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          <div
            className="hidden lg:flex md:items-center md:space-x-6 md:w-auto"
            id="navbar"
          >
            <Reveal variants={slideFromRight(0.2)}>
              <ul className="flex gap-4 items-center md:flex-row md:space-x-3 mt-0">
                {visibleNavLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink href={link.href} label={t(link.title)} />
                  </li>
                ))}
              </ul>
            </Reveal>

            <SwitcherLanguage />
          </div>
        </div>
      </Reveal>

      {navbarOpen && (
        <MenuMobile
          links={visibleNavLinks}
          t={t}
          onCloseNavbar={handleOpenNavbar}
        />
      )}
    </header>
  );
};
