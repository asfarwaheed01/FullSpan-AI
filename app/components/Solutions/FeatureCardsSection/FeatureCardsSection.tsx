"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureCardsProps } from "@/app/types/featureCards";
import FeatureCard from "../FeatureCards/FeatureCards";

const FeatureCardsSection: React.FC<FeatureCardsProps> = ({
  heading,
  headingHighlight,
  cards,
  backgroundColor = "secondary-bg",
}) => {
  const getGridClass = () => {
    if (cards.length <= 3) {
      return "md:grid-cols-3";
    } else if (cards.length <= 4) {
      return "md:grid-cols-2 lg:grid-cols-4";
    } else if (cards.length <= 6) {
      return "md:grid-cols-2 lg:grid-cols-3";
    } else {
      return "md:grid-cols-3 lg:grid-cols-4";
    }
  };

  const renderHeading = () => {
    if (headingHighlight) {
      const parts = heading.split(headingHighlight);
      return (
        <h2 className="text-[40px] md:text-[48px] lg:text-[60px] font-bold text-center mb-12 leading-tight">
          {parts[0]}
          <span className="text-purple-600">{headingHighlight}</span>
          {parts[1] || ""}
        </h2>
      );
    }
    return (
      <h2 className="text-[40px] md:text-[48px] lg:text-[60px] font-bold text-center mb-12 leading-tight">
        {heading}
      </h2>
    );
  };

  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {renderHeading()}
        </motion.div>

        <div
          className={`grid grid-cols-1 ${getGridClass()} gap-6 md:gap-8 justify-items-center`}
        >
          {cards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
