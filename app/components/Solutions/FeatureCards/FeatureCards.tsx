"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  FiSettings,
  FiFile,
  FiLinkedin,
  FiUsers,
  FiDatabase,
  FiBarChart2,
  FiMessageSquare,
  FiCpu,
  FiBriefcase,
  FiActivity,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

import { FeatureCardComponentProps } from "@/app/types/featureCards";

const iconMap: { [key: string]: React.ReactNode } = {
  settings: <FiSettings size={24} />,
  file: <FiFile size={24} />,
  linkedin: <FiLinkedin size={24} />,
  users: <FiUsers size={24} />,
  database: <FiDatabase size={24} />,
  chart: <FiBarChart2 size={24} />,
  message: <FiMessageSquare size={24} />,
  cpu: <FiCpu size={24} />,
  briefcase: <FiBriefcase size={24} />,
  activity: <FiActivity size={24} />,
  lightbulb: <HiOutlineLightBulb size={24} />,
};

const FeatureCard: React.FC<FeatureCardComponentProps> = ({ card }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl border border-purple-200 p-8 hover:shadow-md transition-shadow relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon Circle - Positioned at top left with overlap */}
      <div className="absolute -left-3 -top-3">
        <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
          {iconMap[card.icon] || <HiOutlineLightBulb size={24} />}
        </div>
      </div>

      {/* Content with padding to account for icon */}
      <div className="pt-6 pl-6">
        {/* Title */}
        <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-1">
          {card.title}
        </h3>

        {/* Subtitle (if provided) */}
        {card.subtitle && (
          <p className="text-[14px] md:text-[16px] text-indigo-600 mb-5">
            {card.subtitle}
          </p>
        )}

        {/* Description (if provided) */}
        {card.description && (
          <p className="text-[14px] md:text-[16px] text-gray-600 mb-4">
            {card.description}
          </p>
        )}

        {/* Points (if provided) */}
        {card.points && card.points.length > 0 && (
          <ul className="mb-6 space-y-3">
            {card.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-600 mr-2 text-lg">•</span>
                <span className="text-[14px] md:text-[16px] text-gray-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Button (if provided) */}
        {card.buttonText && card.buttonLink && (
          <Link
            href={card.buttonLink}
            className="inline-flex items-center text-[14px] md:text-[16px] font-medium text-indigo-600 hover:text-indigo-800 mt-4 group"
          >
            {card.buttonText}
            <HiOutlineArrowNarrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
