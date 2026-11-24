import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { ITech } from "@/@types/ITech";

import { Card } from "./Card";

interface ITechCategoryProps {
  icon: LucideIcon;
  label: string;
  items: ITech[];
  isInView: boolean;
}

export const TechCategory = ({
  icon: Icon,
  label,
  items,
  isInView,
}: ITechCategoryProps) => {
  const cardVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="flex items-center gap-x-3 pt-12 first:pt-0">
        <Icon color="#38f8d4" />
        <h3 className="text-xl font-semibold">{label}</h3>
      </div>

      <ul className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full grid__tech">
        {items.map((tech, index) => (
          <motion.li
            key={tech.id}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={cardVariants}
            transition={{ duration: 0.8, delay: index * 0.5 }}
          >
            <Card tech={tech} />
          </motion.li>
        ))}
      </ul>
    </>
  );
};
