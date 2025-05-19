import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion, Variants } from "framer-motion";
import { Article } from "@/app/types/articles";

interface ArticleCardProps {
  article: Article;
  variants: Variants;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variants }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full"
      variants={variants}
    >
      <div className="relative h-48 md:h-[250px] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow gap-5">
        <div className="mb-3">
          <span
            className="text-[16px] md:text-[18px] font-medium"
            style={{
              backgroundColor: article.tag_color,
              padding: "0.25rem 0.75rem",
              borderRadius: "1rem",
              display: "inline-block",
            }}
          >
            {article.tag}
          </span>
        </div>

        <h3 className="text-[20px] md:text-[24px] font-semibold text-gray-900 mb-4 flex-grow">
          {article.title}
        </h3>

        <Link
          href={article.link}
          className="inline-flex items-center justify-between text-[16px] md:text-[18px] text-gray-800 hover:text-[#8624FF] font-medium group transition-colors mt-2"
        >
          <span>Discover More</span>
          <GoArrowUpRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
