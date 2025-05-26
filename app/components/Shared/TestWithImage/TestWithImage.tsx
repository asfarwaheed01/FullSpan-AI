"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { TextWithImageProps } from "@/app/types/testWithImage";
import { FiArrowRight } from "react-icons/fi";

const TextWithImage: React.FC<TextWithImageProps> = ({
  heading,
  highlightColor = "#8624FF",
  description,
  imageSrc,
  imageAlt,
  imageOnRight = true,
  className = "",
  bgColor = "",
  bulletPoints = [],
  buttonText,
  buttonLink,
  withBorder = false,
  py = "16",
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!hasLoaded) {
      setHasLoaded(true);
      controls.start("visible");
    }
  }, [controls, hasLoaded]);

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

  const renderHeading = () => {
    if (typeof heading === "string") {
      return (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {heading}
        </h2>
      );
    }

    return (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {heading.map((segment, index) => {
          if (segment.highlight) {
            return (
              <span
                key={index}
                style={{ color: segment.color || highlightColor }}
              >
                {segment.text}
              </span>
            );
          }
          return <span key={index}>{segment.text}</span>;
        })}
      </h2>
    );
  };

  const containerClass = withBorder
    ? "border-[2px] border-purple-200 rounded-3xl overflow-hidden p-8 md:p-12"
    : "";

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-8 py-${py} ${bgColor} ${className}`}
    >
      <div className="container mx-auto">
        <motion.div
          className={`${containerClass}`}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className={`flex flex-col ${
              imageOnRight ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-12 lg:gap-16`}
          >
            <motion.div className="w-full md:w-1/2" variants={itemVariants}>
              {renderHeading()}

              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl">
                {description}
              </p>

              {bulletPoints && bulletPoints.length > 0 && (
                <ul className="space-y-3 mb-6 max-w-xl">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {buttonText && buttonLink && (
                <Link
                  href={buttonLink}
                  className="text-[10px] md:text-[15px] inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors mt-4"
                >
                  {buttonText}
                  <FiArrowRight className="ml-2" />
                </Link>
              )}
            </motion.div>

            <motion.div className="w-full md:w-1/2" variants={itemVariants}>
              <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextWithImage;
