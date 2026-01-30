'use client';

import Image from 'next/image';
import { useTransition } from 'react';

import { setUserLocale } from '@/actions/locale';
import { Locale } from '@/i18n/config';

interface ISwitcherLanguageProps {
  defaultValue?: string;
}

export const SwitcherLanguage = ({ defaultValue }: ISwitcherLanguageProps) => {
  const [, startTransition] = useTransition();

  function handleChangeLanguage(value: string) {
    const locale = value as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="flex flex-col gap-y-1">
      <button
        type="button"
        className={`hover:cursor-pointer transition duration-300 rounded-full p-0.5 h-5 w-5 switcher-language  ${
          defaultValue === 'pt' && 'transform scale-125'
        }`}
        title={defaultValue === 'pt' ? 'Português' : 'Portuguese'}
        onClick={() => handleChangeLanguage('pt')}
      >
        <Image src="/icons/pt-br.webp" alt="pt-br" width={24} height={24} />
      </button>
      <button
        type="button"
        className={`hover:cursor-pointer transition duration-300 rounded-full p-0.5 h-5 w-5 switcher-language ${
          defaultValue === 'en' && 'transform scale-125'
        }`}
        title={defaultValue === 'en' ? 'English' : 'Inglês'}
        onClick={() => handleChangeLanguage('en')}
      >
        <Image src="/icons/en-us.webp" alt="en-us" width={24} height={24} />
      </button>
    </div>
  );
};
