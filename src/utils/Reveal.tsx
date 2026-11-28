"use client";

import { motion, useInView, Variants } from "motion/react";
import { ReactNode, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
};

export function Reveal({ children, variants, className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}
