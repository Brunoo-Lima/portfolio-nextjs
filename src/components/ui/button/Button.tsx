interface IButtonProps {
  text: string;
  href: string;
  textTooltip: string;
}

export function Button({ text, href, textTooltip }: IButtonProps) {
  return (
    <a
      href={href}
      title={textTooltip}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="bg-gradient-to-br from-primary-green via-second-green to-tertiary-green px-1 py-2 sm:w-40 w-full border-none rounded-full transition duration-300 flex items-center justify-center hover:from-tertiary-green hover:via-second-green hover:to-primary-green"
    >
      <strong className="text-primary-black font-semibold text-base">
        {text}
      </strong>
    </a>
  );
}
