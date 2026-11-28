"use client";

import { useState } from "react";

import { differentialsList } from "@/mocks/differentialsList";

import { Globe } from "./globe/Globe";
import { Slider } from "./slider/Slider";

export const DifferentialWrapper = () => {
  const [slideOrder, setSlideOrder] = useState<number[]>(() =>
    differentialsList.map((_, index) => index),
  );

  const activeSlide = differentialsList[slideOrder[1]];

  return (
    <section className="container mx-auto py-24">
      <div className="grid grid-cols-1 items-center justify-items-center gap-10 min-[1200px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] min-[1200px]:gap-12">
        <Globe data={activeSlide.visual} />

        <Slider slideOrder={slideOrder} setSlideOrder={setSlideOrder} />
      </div>
    </section>
  );
};
