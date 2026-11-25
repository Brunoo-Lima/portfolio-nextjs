export const SubtitleSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="sm:text-4xl text-3xl font-bold inline-block bg-linear-to-r from-primary to-primary-end text-transparent bg-clip-text font-secondary">
      {children}
    </h2>
  );
};
