import { ITech } from '@/@types/ITech';
import { CssIcon } from '@/components/icons/CssIcon';
import { FigmaIcon } from '@/components/icons/FigmaIcon';
import { HtmlIcon } from '@/components/icons/HtmlIcon';
import { JavascriptIcon } from '@/components/icons/JavascriptIcon';
import { JestIcon } from '@/components/icons/JestIcon';
import { NextIcon } from '@/components/icons/NextIcon';
import { NodeIcon } from '@/components/icons/NodeIcon';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { SassIcon } from '@/components/icons/SassIcon';
import { StyledComponentsIcon } from '@/components/icons/StyledComponentsIcon';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { TypescriptIcon } from '@/components/icons/TypescriptIcon';

export const techList: ITech[] = [
  {
    id: 1,
    name: 'HTML',
    icon: <HtmlIcon />,
  },
  {
    id: 2,
    name: 'CSS',
    icon: <CssIcon />,
  },
  {
    id: 3,
    name: 'React',
    icon: <ReactIcon />,
  },
  {
    id: 4,
    name: 'Javascript',
    icon: <JavascriptIcon />,
  },
  {
    id: 5,
    name: 'Typescript',
    icon: <TypescriptIcon />,
  },
  {
    id: 6,
    name: 'Nextjs',
    icon: <NextIcon />,
  },
  {
    id: 7,
    name: 'Sass',
    icon: <SassIcon />,
  },
  {
    id: 8,
    name: 'Styled Components',
    icon: <StyledComponentsIcon />,
  },
  {
    id: 9,
    name: 'Tailwind CSS',
    icon: <TailwindIcon />,
  },
  {
    id: 10,
    name: 'Nodejs',
    icon: <NodeIcon />,
  },
  {
    id: 11,
    name: 'Figma',
    icon: <FigmaIcon />,
  },
  {
    id: 12,
    name: 'Jest',
    icon: <JestIcon />,
  },
];
