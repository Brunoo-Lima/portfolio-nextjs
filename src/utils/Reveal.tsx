'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

type RevealProps = {
  children: ReactNode;
  variants?: Variants | undefined;
  className?: string;
};

export function Reveal({ children, variants, className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className}>
      <motion.div initial="hidden" animate={mainControls} variants={variants}>
        {children}
      </motion.div>
    </div>
  );
}
