import React from "react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          className={`py-2 px-4 md:px-6 text-sm md:text-base font-medium transition-colors ${
            selectedCategory === category.id
              ? "border-b-2 border-[#8624FF] text-black"
              : " text-gray-700 hover:border-b-2 border-gray-300"
          }`}
          onClick={() => onSelectCategory(category.id)}
          whileTap={{ scale: 0.95 }}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
