import { ReactNode } from 'react';

type SkillsCardProps = {
  icon: ReactNode;
};

export function SkillsCard({ icon }: SkillsCardProps) {
  return (
    <div className="bg-second-black flex items-center justify-center border border-primary-gray rounded-sm h-[120px] w-full p-4 transition ease-linear hover:border-primary-white hover:duration-1000">
      <article className="flex items-center justify-center w-[60px] h-[60px]">
        {icon}
      </article>
    </div>
  );
}
