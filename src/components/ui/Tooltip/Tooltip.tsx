interface ITooltipProps {
  text: string;
}

export function Tooltip({ text }: ITooltipProps) {
  return (
    <aside className="absolute bottom-3 -right-3 left-auto px-2 w-max h-fit bg-primary-black border-[1px] border-gray-600 rounded-sm duration-300 transition cursor-default">
      <p className="text-xs text-primary-white">{text}</p>
    </aside>
  );
}
