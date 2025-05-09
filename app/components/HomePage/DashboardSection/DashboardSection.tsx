"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DashboardSectionProps } from "@/app/types/home";

const DashboardSection: React.FC<DashboardSectionProps> = ({
  tag,
  heading,
  description,
  image,
  stats,
}) => {
  return (
    <section className="py-10">
      {/* Shiny effect in top left corner */}

      <div className="relative container mx-auto bg-main-bg p-8 rounded-4xl">
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(134, 36, 255, 0.15) 0%, rgba(27, 5, 76, 0) 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-[14px] font-medium mb-6 border border-purple-500"
              style={{ backgroundColor: "rgba(134, 36, 255, 0.1)" }}
            >
              {tag}
            </div>

            <h2 className="text-[36px] text-white md:text-[48px] font-bold mb-6">
              {heading}
            </h2>

            <p className="text-[16px] md:text-[18px] text-gray-300 mb-12 max-w-lg">
              {description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-[36px] md:text-[45px] font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Dashboard Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glowing effect behind image */}
              <div
                className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(134, 36, 255, 0.2) 0%, rgba(27, 5, 76, 0) 70%)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <Image
                  src={image}
                  alt="AI Dashboard"
                  width={850}
                  height={600}
                  className="rounded-xl shadow-2xl shadow-purple-900/20 w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
