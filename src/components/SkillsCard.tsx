import Image from 'next/image';

type SkillsCardProps = {
  imgUrl: string;
  altText: string;
};

export function SkillsCard({ imgUrl, altText }: SkillsCardProps) {
  return (
    <li className="bg-second-black flex items-center justify-center border border-primary-gray rounded-sm h-[120px] w-full transition ease-linear hover:border-primary-white hover:duration-1000">
      <Image src={imgUrl} alt={altText} width={60} height={60} />
    </li>
  );
}
