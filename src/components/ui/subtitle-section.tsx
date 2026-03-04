export const SubtitleSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-primary-green via-second-green to-tertiary-green text-transparent bg-clip-text font-secondary">
      {children}
    </h2>
  );
};
