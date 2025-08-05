'use client';

import { Form } from './form/form';
import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section
      className="py-20 pt-8 flex items-center md:flex-wrap lg:flex-row flex-col justify-evenly gap-y-10 md:gap-x-10 relative bg-gradient-to-b from-black via-[#121212] to-black"
      id="contact"
    >
      <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text relative">
        {t('title')}

        <span className="absolute -bottom-3 left-0 w-20 h-1 rounded-md bg-gradient-to-r from-primary-green via-second-green to-tertiary-green"></span>
      </h2>

      <div className="md:max-w-[600px] w-[90%] bg-[#121212] py-12 px-6 rounded-xl shadow-sm shadow-primary-gray z-10">
        <Form t={t} />
      </div>

      <div className="absolute inset-0 opacity-15 -z-1 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300ff88' fillOpacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
};
