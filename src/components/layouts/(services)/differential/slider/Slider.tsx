import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { differentialsList } from "@/mocks/differentialsList";

import { Card } from "./Card";

interface ISliderProps {
  slideOrder: number[];
  setSlideOrder: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Slider = ({ slideOrder, setSlideOrder }: ISliderProps) => {
  const buttonStyles = `flex items-center justify-center
            size-10.5 rounded-full border-none
            transition-all duration-300 ease-in-out
            hover:bg-primary hover:[&_svg]:text-foreground
            cursor-pointer`;

  const nextSlide = () => {
    setSlideOrder((prev) => {
      const newOrder = [...prev];
      const firstSlide = newOrder.shift();

      if (firstSlide !== undefined) {
        newOrder.push(firstSlide);
      }

      return newOrder;
    });
  };

  const prevSlide = () => {
    setSlideOrder((prev) => {
      const newOrder = [...prev];
      const lastSlide = newOrder.pop();

      if (lastSlide !== undefined) {
        newOrder.unshift(lastSlide);
      }

      return newOrder;
    });
  };

  return (
    <div
      className="relative flex flex-col items-end
      w-full min-w-0 max-w-152.25 gap-10 min-h-125
      max-[1200px]:min-h-0 max-[1200px]:gap-6
      "
    >
      <div className="flex gap-3">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Botão de voltar"
          className={buttonStyles}
        >
          <ArrowLeftIcon />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Botão de avançar"
          className={buttonStyles}
        >
          <ArrowRightIcon />
        </button>
      </div>

      <div
        className="
          flex flex-col justify-center items-end gap-5
          h-75 min-h-75
          transition-transform duration-300 ease-in-out
          max-[868px]:h-max
        "
      >
        {slideOrder.slice(0, 3).map((slideIndex, index) => {
          const slide = differentialsList[slideIndex];
          const isMiddle = index === 1;

          return (
            <div
              key={index}
              className={`
                min-w-full shrink-0 rounded-[25px]
                transition-[opacity,scale] duration-300
                ${
                  isMiddle
                    ? "scale-100 bg-[#818cf8]/10 border border-primary self-start"
                    : "scale-90 bg-transparent border-none self-end"
                }
              `}
            >
              <Card
                title={slide.title}
                description={slide.description}
                icon={slide.icon}
                isActive={isMiddle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
