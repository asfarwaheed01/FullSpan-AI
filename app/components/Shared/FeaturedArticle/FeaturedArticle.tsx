import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion, Variants } from "framer-motion";
import { Article } from "@/app/types/articles";

interface FeaturedArticleProps {
  article: Article & { description?: string };
  variants?: Variants;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  article,
  variants,
}) => {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden mb-12 w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {/* Mobile layout - image above, text below */}
      <div className="sm:hidden md:p-6">
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl mb-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div>
            <span
              className="text-[14px] font-medium"
              style={{
                backgroundColor: article.tag_color,
                padding: "0.4rem 0.8rem",
                borderRadius: "1.5rem",
                display: "inline-block",
              }}
            >
              {article.tag}
            </span>
          </div>

          <h2 className="text-[22px] font-bold text-gray-900">
            {article.title}
          </h2>

          <Link
            href={article.link}
            className="inline-flex justify-between items-center text-gray-500 hover:text-[#8624FF] font-medium group transition-colors mt-2"
          >
            <span>Discover More</span>
            <GoArrowUpRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </div>
      </div>

      {/* Tablet/Desktop layout - side by side */}
      <div className="hidden sm:flex items-center justify-between p-8 md:p-10 lg:p-12">
        <div className="flex flex-col gap-6 sm:pr-4 md:pr-8 lg:pr-16 sm:max-w-[45%]">
          <div>
            <span
              className="text-[16px] font-medium"
              style={{
                backgroundColor: article.tag_color,
                padding: "0.5rem 1rem",
                borderRadius: "1.5rem",
                display: "inline-block",
              }}
            >
              {article.tag}
            </span>
          </div>

          <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-gray-900">
            {article.title}
          </h2>

          <Link
            href={article.link}
            className="inline-flex items-center text-gray-500 hover:text-[#8624FF] font-medium group transition-colors mt-4"
          >
            <span>Discover More</span>
            <GoArrowUpRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </div>

        <div className="relative h-[220px] md:h-[250px] lg:h-[280px] w-[100%] md:w-[45%] lg:w-[40%] overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 50vw, 40vw"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;
