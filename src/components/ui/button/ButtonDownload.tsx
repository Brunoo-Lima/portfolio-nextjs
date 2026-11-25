interface IButtonDownloadProps {
  text: string;
  href: string;
  textTooltip: string;
}

export const ButtonDownload = ({
  text,
  href,
  textTooltip,
}: IButtonDownloadProps) => {
  return (
    <a
      href={href}
      title={textTooltip}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className=" bg-linear-to-br from-primary to-primary-end px-1 py-1 sm:w-40 w-full rounded-full transition duration-300 hover:from-primary-end hover:to-primary"
    >
      <strong className="text-foreground bg-background text-base block px-5 py-2 rounded-full font-semibold">
        {text}
      </strong>
    </a>
  );
};
