import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'second-black': '#0A0908',
        'primary-gray': '#333533',
        'second-gray': '#92A5B0',
        'primary-white': '#ffffff',
        'primary-green': '#43ea80',
        'second-green': '#38f8d4',
        'tertiary-green': '#0EAD69',
      },
      borderRadius: {
        section_hero: '30% 70% 76% 24% / 69% 45% 55% 31% ',
      },
      animation: {
        'spin-slow': 'spin 30s alternate infinite',
      },
      blur: {
        xxxl: '100px',
      },
    },
  },
  plugins: [],
};
export default config;
