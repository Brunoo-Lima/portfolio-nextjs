import { ExternalIcon } from '@/components/icons/ExternalIcon';
import Link from 'next/link';

interface IButtonViewProps {
  href: string;
}

export function ButtonView({ href }: IButtonViewProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center gap-2 bg-primary-white py-2 px-3 w-28 rounded-md border-none hover:scale-105 transition duration-300"
    >
      <span className="text-sm text-primary-black font-normal">Visualizar</span>
      <ExternalIcon />
    </Link>
  );
}
