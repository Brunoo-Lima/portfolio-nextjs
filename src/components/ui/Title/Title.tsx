'use client';

import { TypeAnimation } from 'react-type-animation';

export const TitleAnimation = () => {
  return (
    <h1 className="md:text-6xl text-4xl md:text-start text-center leading-tight">
      <span className="text-transparent bg-gradient-to-r from-primary-green via-second-green to-tertiary-green bg-clip-text font-bold">
        Olá, eu sou{' '}
      </span>
      <br />
      <TypeAnimation
        sequence={[
          'Bruno',
          1000,
          'Web Developer',
          1000,
          'Front End Developer',
          1000,
        ]}
        wrapper="span"
        repeat={Infinity}
      />
    </h1>
  );
};
