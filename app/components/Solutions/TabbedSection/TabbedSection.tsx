"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TextWithImage from "@/app/components/Shared/TestWithImage/TestWithImage";
import { TabbedSectionProps } from "@/app/types/tabbedSection";

const TabbedSection: React.FC<TabbedSectionProps> = ({
  tabs,
  activeTabIndex = 0,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  return (
    <div className={`w-full ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap mb-4 border-b">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-4 px-6 text-lg font-medium relative ${
                activeTab === index
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
              {activeTab === index && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-purple-600"
                  layoutId="tab-indicator"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index} className={activeTab === index ? "block" : "hidden"}>
            <TextWithImage
              heading={tab.content.heading}
              description={tab.content.description}
              imageSrc={tab.content.imageSrc}
              imageAlt={tab.content.imageAlt || "Tab content image"}
              imageOnRight={tab.content.imageOnRight}
              bgColor={tab.content.bgColor || "bg-white"}
              bulletPoints={tab.content.bulletPoints || []}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedSection;
