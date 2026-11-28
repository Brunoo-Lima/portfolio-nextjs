"use client";

import createGlobe from "cobe";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

import { FloatingLabel } from "./FloatingLabel";

export interface IGlobeData {
  title: string;
  description: string;
  labels: [string, string];
}

interface IGlobeProps {
  data: IGlobeData;
}

export const Globe = ({ data }: IGlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    let phi = 0;
    let width = canvas.offsetWidth;
    let animationFrame: number;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.35, 0.35, 0.65],
      markerColor: [0.65, 0.7, 1],
      glowColor: [0.2, 0.2, 0.4],
      markers: [
        { location: [-23.55, -46.63], size: 0.07 },
        { location: [40.71, -74], size: 0.05 },
        { location: [51.5, -0.12], size: 0.06 },
        { location: [35.67, 139.65], size: 0.05 },
      ],
    });

    const animate = () => {
      phi += 0.003;

      globe.update({
        phi,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(() => {
      width = canvas.offsetWidth;

      globe.update({
        width: width * 2,
        height: width * 2,
      });
    });

    observer.observe(canvas);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative isolate mx-auto flex w-full max-w-125 flex-col items-center">
      {/* Dotted background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle,#818cf8_1px,transparent_1px)]
          bg-size-[22px_22px] opacity-15
          mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]
        "
      />

      {/* Globe container */}
      <div className="relative aspect-square w-full">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="
            absolute inset-[20%] -z-10
            rounded-full bg-indigo-500/15 blur-[90px]
          "
        />

        {/* Orbital lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
        >
          <div
            className="
              absolute top-1/2 left-1/2
              h-[28%] w-[95%]
              -translate-x-1/2 -translate-y-1/2
              -rotate-30 rounded-[50%]
              border border-dashed border-indigo-400/30
            "
          />

          <div
            className="
              absolute top-1/2 left-1/2
              h-[28%] w-[95%]
              -translate-x-1/2 -translate-y-1/2
              rotate-45 rounded-[50%]
              border border-indigo-400/10
            "
          />
        </div>

        {/* Globe */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="aspect-square w-full"
        />

        {/* Floating label - top left */}
        <FloatingLabel label={data.labels[0]} className="top-[24%] left-[2%]" />

        {/* Floating label - bottom right */}
        <FloatingLabel
          label={data.labels[1]}
          className="right-[2%] bottom-[24%]"
          delay={0.15}
        />
      </div>

      {/* Dynamic description */}
      <div className="relative -mt-5 min-h-20 text-center" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={data.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="text-xl font-semibold text-foreground">
              {data.title}
            </h3>

            <p className="mt-1 text-sm text-muted">{data.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
