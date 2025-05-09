"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { heroData } from "@/app/data/homeData";

const HeroSection = () => {
  return (
    <section className="md:max-h-[100vh] relative bg-main-bg text-white overflow-hidden py-6 sm:py-8 md:pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B054C] to-[#14062D] z-0"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Text content */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[22px] sm:text-[28px] md:text-[46px] font-bold leading-tight mb-4 md:mb-6">
            {heroData.mainHeading.firstPart} <br />
            {heroData.mainHeading.secondPart}{" "}
            <span className="text-[#8624FF]">
              {heroData.mainHeading.highlight}
            </span>
          </h1>

          <motion.p
            className="text-[14px] sm:text-[15px] md:text-[17px] opacity-80 max-w-3xl mx-auto mb-6 md:mb-10 px-2 sm:px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heroData.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {heroData.buttons.map((button, index) => (
              <motion.div
                key={button.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={button.url}
                  className={`flex items-center justify-center gap-1 sm:gap-2 rounded-full py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 text-[10px] sm:text-[11px] md:text-[12px] font-medium transition-all w-full
                    ${
                      index === 1
                        ? "bg-gradient-to-b from-[#8624FF] to-[#1D1E9D] text-white"
                        : "bg-gray-800 hover:bg-gray-400 text-white"
                    }`}
                >
                  {button.text}
                  <GoArrowUpRight className="text-base md:text-lg" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dashboard image with animated containers */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left container */}
          <motion.div
            className="hidden md:block absolute -left-4 md:-left-10 -top-8 -z-10 opacity-60 w-16 h-16 md:w-96 md:h-96"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              src={heroData.images.containerLeft}
              alt="Background shape"
              className="object-cover"
            />
          </motion.div>

          {/* Right container */}
          <motion.div
            className="hidden md:block absolute -right-4 md:-right-37 -top-5 -z-10 opacity-60 w-32 h-32 md:w-96 md:h-96"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              src={heroData.images.containerRight}
              alt="Background shape"
              className="object-cover"
            />
          </motion.div>

          {/* Main hero image (dashboard) */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-purple-900/20">
            <Image
              src={heroData.images.hero}
              alt="AI Career Dashboard"
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
