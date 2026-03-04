interface ILinkButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  classNameCustom?: string;
  href: string;
}

export const LinkButton = ({
  children,
  classNameCustom,
  href,
  ...props
}: ILinkButtonProps) => {
  return (
    <a
      rel="noopener noreferrer nofollow"
      href={href}
      target="_blank"
      className={`${classNameCustom} px-4 py-2 w-16 min-h-full rounded-lg transition-all duration-300 border border-transparent hover:border hover:border-primary-gray hover:bg-primary-gray/45`}
      {...props}
    >
      {children}
    </a>
  );
};
