import { ITech } from '@/@types/ITech';
<<<<<<<< HEAD:src/components/layouts/SkillsCard.tsx
import { ReactNode, useState } from 'react';
import { Tooltip } from '../ui/Tooltip/Tooltip';
========
import { useState } from 'react';
import { Tooltip } from '../../ui/Tooltip/Tooltip';
>>>>>>>> main:src/components/layouts/Skills/SkillsCard.tsx

type SkillsCardProps = {
  tech: ITech;
};

export function SkillsCard({ tech }: SkillsCardProps) {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <div
      className="bg-second-black flex items-center justify-center border border-primary-gray rounded-sm h-[120px] w-full p-4 transition duration-1000 ease-linear hover:border-primary-white relative"
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <article className="flex items-center justify-center md:w-full min-w-20 h-fit ">
        {tech.icon}
      </article>

      {tooltip && <Tooltip text={tech.name} />}
    </div>
  );
}
