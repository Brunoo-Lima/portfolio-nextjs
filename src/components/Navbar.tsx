'use client';

import Image from 'next/image';
import { NavLink } from './NavLink';
import { useEffect, useState } from 'react';
import { Reveal } from '@/utils/Reveal';

import {
  slideFromLeft,
  slideFromRight,
  visibleFromOpacityZero,
} from '@/utils/motion';

import Open from '../../public/assets/menu.svg';
import Close from '../../public/assets/close.svg';
import { MenuOverlay } from './MenuOverlay';

export type NavLinksProps = {
  title: string;
  id: number;
};

const navLinks: NavLinksProps[] = [
  {
    id: 1,
    title: 'Início',
  },
  {
    id: 2,
    title: 'Sobre',
  },
  {
    id: 3,
    title: 'Conhecimento',
  },
  {
    id: 4,
    title: 'Projetos',
  },
];

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const navbar = document.getElementById('navbar');
      const mobileMenu = document.getElementById('mobile-menu');

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

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navbarOpen]);

  function handleClick() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 mx-auto bg-primary-black bg-opacity-100 border-b border-gray-800">
      <Reveal variants={visibleFromOpacityZero}>
        <div className="flex fle-wrap items-center justify-between mx-auto p-8 container">
          <Reveal variants={slideFromLeft(0.2)}>
            <h1 className="text-3xl md:text-4xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-green to-second-green bg-clip-text">
              ❮BL/❯
            </h1>
          </Reveal>

          <div className="block md:hidden" id="mobile-menu">
            <button
              onClick={handleClick}
              className="group flex p-2 cursor-pointer items-center justify-center"
            >
              {!navbarOpen ? (
                <div className="space-y-2">
                  <span className="block h-[1px] w-8 origin-center rounded-full bg-primary-white transition-transform ease-in-out -translate-y-1.0 duration-500 "></span>
                  <span className="block h-[1px] w-8 origin-center rounded-full bg-primary-white transition-transform ease-in-out translate-y-1.0 duration-500 group-active:invisible"></span>
                  <span className="block h-[1px] w-8 origin-center rounded-full bg-primary-white transition-transform ease-in-out translate-y-1.0 duration-500"></span>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="block h-[1px] w-8 bg-primary-white transition-transform ease-in-out translate-y-0.5 -rotate-45 duration-500"></span>
                  <span className="block h-[1px] w-8 bg-primary-white transition-transform ease-in-out -translate-y-1.5 rotate-45 duration-500"></span>
                </div>
              )}
            </button>
          </div>

          <div className="hidden md:block md:w-auto" id="navbar">
            <Reveal variants={slideFromRight(0.2)}>
              <ul className="flex gap-4 items-center md:flex-row md:space-x-6 mt-0">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink title={link.title} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Reveal>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
