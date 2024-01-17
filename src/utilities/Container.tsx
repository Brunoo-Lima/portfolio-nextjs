import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1200px] w-full lg:px-8 px-6 mx-auto">{children}</div>
  );
}
