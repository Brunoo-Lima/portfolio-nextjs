import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  customizing: string;
};

export function Button({ children, customizing }: ButtonProps) {
  return (
    <button
      className={`${customizing} border px-1 py-1 sm:w-40 w-full rounded-full transition duration-300 hover:border-opacity-75`}
    >
      {children}
    </button>
  );
}
