"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/app/data/homeData";

const ServicesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-secondary-bg relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold">
            {servicesData.heading.start}
            <span className="text-[#8624FF]">
              {servicesData.heading.highlight}
            </span>
          </h2>
        </motion.div>

        {/* Services Steps with Path */}
        <div className="relative">
          {/* Path SVG - Only visible on desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 z-0 w-full h-full"
            style={{ transform: "translateX(-50%)" }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 850"
              preserveAspectRatio="none"
            >
              {/* Main vertical line */}
              <path
                d="M 600,50 L 600,800"
                stroke="#BAA6FF"
                strokeWidth="2"
                fill="none"
              />

              {/* First horizontal branch and curve */}
              <path
                d="M 600,120 C 600,120 500,120 400,120"
                stroke="#BAA6FF"
                strokeWidth="2"
                fill="none"
              />

              {/* Second horizontal branch and curve */}
              <path
                d="M 600,400 C 600,400 700,400 800,400"
                stroke="#BAA6FF"
                strokeWidth="2"
                fill="none"
              />

              {/* Third horizontal branch and curve */}
              <path
                d="M 600,680 C 600,680 500,680 400,680"
                stroke="#BAA6FF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Main content */}
          <motion.div
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* First Service - Image on left, text on right */}
            <motion.div
              className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-16 mb-20 md:mb-36"
              variants={itemVariants}
            >
              {/* Left Image Container */}
              <div className="w-full relative">
                {/* Image Card Container */}
                <motion.div
                  className="relative mx-auto max-w-md"
                  variants={cardVariants}
                >
                  {/* Outer Purple Background */}
                  <div className="rounded-3xl bg-[#E3DEFF] p-3 relative">
                    {/* Number Badge - Positioned in top-right of card as in reference */}
                    <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#1B054C] text-white rounded-full flex items-center justify-center font-bold text-lg z-30">
                      {servicesData.services[0].id}
                    </div>

                    {/* Inner Purple Background */}
                    <div className="rounded-2xl bg-[#D3C9FF] w-full aspect-square relative overflow-hidden">
                      {/* Course Impression Card - Positioned as in reference */}
                      <div className="absolute left-[15%] top-[35%] w-[75%] h-auto aspect-[4/3] bg-white shadow-lg rounded-xl -rotate-12 z-10">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                          <Image
                            src={servicesData.services[0].images.impression}
                            alt="Course Impression"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Course Stat Card - Positioned as in reference */}
                      <div className="absolute left-[40%] top-[55%] w-[75%] h-auto aspect-[4/3] bg-white shadow-lg rounded-xl rotate-6 z-20">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                          <Image
                            src={servicesData.services[0].images.stat}
                            alt="Course Stats"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Text Content */}
              <div className="w-full text-center md:text-left md:pl-16">
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 text-gray-900">
                  {servicesData.services[0].title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-700 max-w-lg">
                  {servicesData.services[0].description}
                </p>
              </div>
            </motion.div>

            {/* Second Service - Text on left, image on right */}
            <motion.div
              className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-16 mb-20 md:mb-36"
              variants={itemVariants}
            >
              {/* Left Text Content */}
              <div className="w-full text-center md:text-right order-2 md:order-1 md:pr-16">
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 text-purple-600">
                  {servicesData.services[1].title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-700 ml-auto max-w-lg">
                  {servicesData.services[1].description}
                </p>
              </div>

              {/* Right Image Container */}
              <div className="w-full relative order-1 md:order-2">
                {/* Image Card Container */}
                <motion.div
                  className="relative mx-auto max-w-md"
                  variants={cardVariants}
                >
                  {/* Outer Purple Background */}
                  <div className="rounded-3xl bg-[#E3DEFF] p-3 relative">
                    {/* Number Badge - Positioned in top-left of card as in reference */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#1B054C] text-white rounded-full flex items-center justify-center font-bold text-lg z-30">
                      {servicesData.services[1].id}
                    </div>

                    {/* Inner Purple Background */}
                    <div className="rounded-2xl bg-[#D3C9FF] w-full aspect-square relative overflow-hidden">
                      {/* Positioned exactly as in reference - Service 2 */}
                      {/* Course Stat Card - front positioned */}
                      <div className="absolute left-[40%] top-[43%] w-[65%] h-auto aspect-[4/3] bg-white shadow-lg rounded-xl rotate-[190deg] z-20">
                        <div className="relative w-full h-full overflow-hidden rounded-xl rotate-180">
                          <Image
                            src={servicesData.services[1].images.stat}
                            alt="Course Stats"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Course Impression Card - behind positioned */}
                      <div className="absolute left-[18%] top-[30%] w-[65%] h-auto aspect-[4/3] bg-white shadow-lg rounded-xl rotate-[170deg] z-10">
                        <div className="relative w-full h-full overflow-hidden rounded-xl rotate-180">
                          <Image
                            src={servicesData.services[1].images.impression}
                            alt="Course Impression"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Third Service - Image on left, text on right */}
            <motion.div
              className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-16"
              variants={itemVariants}
            >
              {/* Left Image Container */}
              <div className="w-full relative">
                {/* Image Card Container */}
                <motion.div
                  className="relative mx-auto max-w-md"
                  variants={cardVariants}
                >
                  {/* Outer Purple Background */}
                  <div className="rounded-3xl bg-[#E3DEFF] p-3 relative">
                    {/* Number Badge - Positioned in top-right of card as in reference */}
                    <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#1B054C] text-white rounded-full flex items-center justify-center font-bold text-lg z-30">
                      {servicesData.services[2].id}
                    </div>

                    {/* Inner Purple Background */}
                    <div className="rounded-2xl bg-[#D3C9FF] w-full aspect-square relative overflow-hidden">
                      {/* Course Impression Card - Positioned as in reference */}
                      <div className="absolute left-[15%] top-[35%] w-[75%] h-auto aspect-[4/3] bg-white shadow-lg rounded-xl -rotate-12 z-10">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                          <Image
                            src={servicesData.services[2].images.impression}
                            alt="Course Impression"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Course Stat Card - Positioned as in reference */}
                      <div className="absolute left-[40%] top-[55%] w-[75%] h-auto aspect-[4/3] bg-white shadow-lg rounded-xl rotate-6 z-20">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                          <Image
                            src={servicesData.services[2].images.stat}
                            alt="Course Stats"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Text Content */}
              <div className="w-full text-center md:text-left md:pl-16">
                <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 text-purple-600">
                  {servicesData.services[2].title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-700 max-w-lg">
                  {servicesData.services[2].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
