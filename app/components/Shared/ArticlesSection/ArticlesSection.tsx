"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArticlesSectionProps } from "@/app/types/articles";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  heading,
  subheading,
  articles,
  viewAllLink = "/blog",
  viewAllText = "See All",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-2">
              {heading}
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 max-w-xl">
              {subheading}
            </p>
          </motion.div>

          {viewAllLink && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href={viewAllLink}
                className="text-[15px] md:text-[16px] font-medium text-gray-800 hover:text-[#8624FF] transition-colors"
              >
                {viewAllText}
              </Link>
            </motion.div>
          )}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
