'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

type RevealProps = {
  children: ReactNode;
  variants?: Variants | undefined;
};

export function Reveal({ children, variants }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div initial="hidden" animate={mainControls} variants={variants}>
        {children}
      </motion.div>
    </div>
  );
}
