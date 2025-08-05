import { ReactNode } from 'react';

interface IButtonLinkProps {
  icon: ReactNode;
  href: string;
  textTooltip: string;
}

export function ButtonLink({ icon, href, textTooltip }: IButtonLinkProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer nofollow"
      aria-label="Link para minhas redes"
      target="_blank"
      title={textTooltip}
      className="px-4 py-2 w-16 min-h-full rounded-lg transition-all duration-300 border border-transparent hover:border hover:border-primary-gray hover:bg-primary-gray/45"
    >
      {icon}
    </a>
  );
}
