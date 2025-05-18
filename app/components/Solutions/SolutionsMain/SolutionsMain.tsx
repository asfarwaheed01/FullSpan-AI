"use client";

import React from "react";
import { motion } from "framer-motion";
import { SolutionHeroProps } from "@/app/types/solutions";

interface SolutionsMainProps {
  hero: SolutionHeroProps & {
    normalTextColor?: string;
    highlightedTextColor?: string;
    descriptionTextColor?: string;
  };
}

const SolutionsMain: React.FC<SolutionsMainProps> = ({ hero }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const normalTextColor = hero.normalTextColor || "text-white";
  const highlightedTextColor = hero.highlightedTextColor || "text-[#8624FF]";
  const descriptionTextColor = hero.descriptionTextColor || "text-gray-300";

  return (
    <section
      className={`w-full py-16 md:py-24 ${
        hero.backgroundClass || "bg-main-bg"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className={`text-[40px] md:text-[48px] lg:text-[56px] font-bold mb-6 leading-tight ${normalTextColor}`}
            variants={itemVariants}
          >
            {hero.title.normalText}
            <span className={highlightedTextColor}>
              {hero.title.highlightedText}
            </span>
          </motion.h1>

          <motion.p
            className={`text-[16px] md:text-[17px] mx-auto ${descriptionTextColor}`}
            variants={itemVariants}
          >
            {hero.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsMain;
