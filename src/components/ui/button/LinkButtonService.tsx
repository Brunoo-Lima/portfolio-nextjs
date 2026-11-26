interface ILinkButtonServiceProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  classNameCustom?: string;
  href: string;
}

export const LinkButtonService = ({
  children,
  classNameCustom,
  href,
  ...props
}: ILinkButtonServiceProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`${classNameCustom} max-w-max group inline-flex items-center gap-4 rounded-full bg-accent px-6 py-3 font-semibold text-background transition duration-300 hover:bg-accent/90 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-accent font-service`}
      {...props}
    >
      {children}
    </a>
  );
};
