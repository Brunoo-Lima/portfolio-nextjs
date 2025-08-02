'use client';

import { Form } from './form/form';
import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section
      className="md:py-20 py-8 mb-8 flex items-center flex-wrap justify-evenly gap-y-10 md:gap-x-10 "
      id="contact"
    >
      <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text">
        {t('title')}
      </h2>

      <div className="max-w-[600px] w-full bg-[#121212] py-12 px-6 rounded-xl shadow-sm shadow-primary-gray">
        <Form t={t} />
      </div>
    </section>
  );
};
