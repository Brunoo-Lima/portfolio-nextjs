import { AnimatePresence, motion } from "motion/react";

interface IFloatingLabelProps {
  label: string;
  className?: string;
  delay?: number;
}

export const FloatingLabel = ({
  label,
  className,
  delay = 0,
}: IFloatingLabelProps) => {
  return (
    <motion.div
      className={`absolute z-20 ${className ?? ""}`}
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div
        className="
          flex min-w-28 items-center justify-center gap-2
          rounded-lg border border-indigo-400/25
          bg-[#111118]/85 px-3 py-2.5
          shadow-lg shadow-indigo-500/5
          backdrop-blur-md
        "
      >
        <span className="relative flex size-1.5 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo-400 opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-indigo-400" />
        </span>

        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-medium text-indigo-200"
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
