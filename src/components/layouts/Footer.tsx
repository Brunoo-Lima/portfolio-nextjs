'use client';

import Image from 'next/image';

import UpArrow from '../../../public/assets/upArrow.svg';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTopTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="border-t border-t-gray-800">
      <div className="container px-12 py-8 mx-auto  ">
        <div className="flex justify-between items-center md:flex-row flex-col">
          <p className="md:order-none order-last md:mt-0 mt-4">
            © {year} <strong>Bruno Lima. </strong>{' '}
            <span className="text-second-gray">
              Todos os direitos reservados.
            </span>
          </p>

          <button
            className="flex items-center gap-2 hover:cursor-pointer"
            onClick={scrollTopTop}
          >
            <p className="md:hidden block">Voltar ao topo</p>
            <Image
              src={UpArrow}
              alt="Icone para voltar ao topo"
              className="w-9 h-9 animate-bounce transition duration-300 bg-primary-black border border-gray-800 rounded-full p-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
