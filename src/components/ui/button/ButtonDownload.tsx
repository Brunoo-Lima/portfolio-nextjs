import Link from 'next/link';

interface IButtonDownloadProps {
  text: string;
  href: string;
}

export function ButtonDownload({ text, href }: IButtonDownloadProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className=" bg-gradient-to-br from-primary-green via-second-green to-tertiary-green   px-1 py-1 sm:w-40 w-full rounded-full transition duration-300 hover:from-tertiary-green hover:via-second-green hover:to-primary-green"
    >
      <strong className="text-primary-white bg-primary-black text-base block px-5 py-2 rounded-full font-semibold">
        {text}
      </strong>
    </Link>
  );
}
