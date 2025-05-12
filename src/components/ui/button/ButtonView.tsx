import { ExternalIcon } from '@/components/icons/ExternalIcon';

interface IButtonViewProps {
  href: string;
  textTooltip: string;
}

export function ButtonView({ href, textTooltip }: IButtonViewProps) {
  return (
    <a
      href={href}
      target="_blank"
      title={textTooltip}
      rel="noopener noreferrer nofollow"
      className="flex items-center justify-center gap-2 bg-primary-white py-2 px-3 w-28 rounded-md border-none hover:scale-105 transition duration-300"
    >
      <span className="text-sm text-primary-black font-normal">Visualizar</span>
      <ExternalIcon />
    </a>
  );
}
