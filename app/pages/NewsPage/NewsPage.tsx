"use client";

import React, { useState, useEffect } from "react";
import SolutionsMain from "@/app/components/Solutions/SolutionsMain/SolutionsMain";
import { newsPageData } from "@/app/data/newsPageData";
import { motion } from "framer-motion";
import FeaturedArticle from "@/app/components/Shared/FeaturedArticle/FeaturedArticle";
import CategoryFilter from "@/app/components/NewsPage/CategoryFilters/CategoryFilters";
import ArticleCard from "@/app/components/Shared/ArticleCard/ArticleCard";

const NewsPage = () => {
  const { hero, categories, featured, articles } = newsPageData;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) => {
        const categoryName = categories.find(
          (cat) => cat.id === selectedCategory
        )?.name;
        return article.tag === categoryName;
      });
      setFilteredArticles(filtered);
    }
  }, [selectedCategory, articles, categories]);

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
    <>
      <SolutionsMain hero={hero} />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        {/* Featured Article */}
        <FeaturedArticle article={featured} variants={itemVariants} />

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            className="text-center py-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-medium text-gray-700">
              No articles found for this category.
            </h3>
            <p className="text-gray-500 mt-2">
              Try selecting a different category or check back later.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default NewsPage;
