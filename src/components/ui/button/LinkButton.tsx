import Link from 'next/link';
import { ReactNode } from 'react';

interface ILinkButtonProps {
  icon: ReactNode;
  href: string;
}

export function LinkButton({ icon, href }: ILinkButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="px-4 py-2 w-16 min-h-full rounded-lg transition-all duration-300 border border-transparent hover:border hover:border-primary-gray hover:bg-primary-gray/45"
    >
      {icon}
    </Link>
  );
}
