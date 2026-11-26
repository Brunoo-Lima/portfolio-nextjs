import React from "react";

interface IHeaderContainerProps {
  children: React.ReactNode;
}

export const HeaderContainer = ({ children }: IHeaderContainerProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 mx-auto bg-background/50 border-b border-primary/40 backdrop-blur-sm backdrop-saturate-50">
      {children}
    </header>
  );
};
