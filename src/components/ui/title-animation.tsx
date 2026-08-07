"use client";

import { TypeAnimation } from "react-type-animation";

export const TitleAnimation = () => {
  return (
    <h1 className="md:text-6xl text-4xl md:text-start text-center leading-tight">
      <span className="text-transparent bg-gradient-to-r from-primary-green via-second-green to-tertiary-green bg-clip-text font-bold ">
        Olá, eu sou{" "}
      </span>
      <br />
      <TypeAnimation
        sequence={[
          "Bruno",
          1500,
          "FullStack Developer",
          1500,
          "SEO Analyst",
          1500,
        ]}
        wrapper="span"
        repeat={Infinity}
        className="font-secondary sm:text-5xl text-3xl"
      />
    </h1>
  );
};
