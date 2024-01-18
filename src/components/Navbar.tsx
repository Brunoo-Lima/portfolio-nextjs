'use client';

import Link from 'next/link';
import { NavLink } from './NavLink';
import { useState } from 'react';
import Image from 'next/image';

import Open from '@/assets/menu.svg';
import Close from '@/assets/close.svg';
import { MenuOverlay } from './MenuOverlay';

export type NavLinksProps = {
  title: string;
  path: string;
};

const navLinks: NavLinksProps[] = [
  {
    title: 'Início',
    path: '#initial',
  },
  {
    title: 'Sobre',
    path: '#about',
  },
  {
    title: 'Conhecimento',
    path: '#skills',
  },
  {
    title: 'Projetos',
    path: '#projects',
  },
];

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-primary-black bg-opacity-100 border-b border-gray-800">
      <div className="flex fle-wrap items-center justify-between mx-auto p-8">
        <Link
          href={'/'}
          className="text-3xl md:text-4xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-green to-second-green bg-clip-text"
        >
          ❮BL/❯
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="border-2 rounded-md border-primary-white bg-primary-black hover:bg-tertiary-green"
            >
              <Image src={Open} alt="Icone aberto" className="w-8 h-8" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="border-2 rounded-md border-primary-white bg-primary-black hover:bg-tertiary-green"
            >
              <Image src={Close} alt="Icone aberto" className="w-8 h-8" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-4 items-center md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
