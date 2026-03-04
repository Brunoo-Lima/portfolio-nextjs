'use client';

import { useTranslations } from 'next-intl';

import { visibleFromOpacityZero } from '@/utils/motion';
import { Reveal } from '@/utils/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRightIcon } from 'lucide-react';

export const Recomendations = () => {
  const t = useTranslations('Recomendations');

  return (
    <section className="py-20 pt-8" id="contact">
      <Reveal
        variants={visibleFromOpacityZero}
        className="flex justify-center items-center"
      >
        <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text font-secondary">
          {t('title')}
        </h2>
      </Reveal>
      <div className="mx-auto flex flex-col items-center justify-center gap-6 mt-12 px-6">
        <div className="max-w-[785px]">
          <Image
            src={'/img/recomendacao.webp'}
            alt="Recomendação CEO Mestres da Web"
            width={785}
            height={292}
            loading="lazy"
            className="object-contain rounded-md"
          />
        </div>

        <Link
          href="/https://www.linkedin.com/in/bruno-lima-8a2407173/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="md:text-base rounded-xl py-2 px-4 bg-transparent hover:bg-gray-800 text-second-green transition duration-300 cursor-pointer flex items-center gap-2 relative link-recomendation"
        >
          Ver recomendação completa
          <MoveRightIcon size={24} />
        </Link>
      </div>
    </section>
  );
};
