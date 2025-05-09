"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsSectionProps {
  title: string;
  faqs: FAQItem[];
}

const FAQsSection: React.FC<FAQsSectionProps> = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-5 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-[66px] font-bold text-purple-600 mb-12">
          {title}
        </h2>

        <div className="mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const bgClasses = isOpen
              ? "from-[#8624FF] to-[#1D1E9D] bg-gradient-to-r text-white"
              : "bg-white text-gray-900";

            return (
              <div
                key={index}
                className="mb-4 border-b-[1px] border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${bgClasses}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-[28px] font-medium">{faq.question}</h3>
                  {/* circle wrapper */}
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                      isOpen ? "border-white" : "border-gray-400"
                    }`}
                  >
                    {isOpen ? (
                      <FiMinus size={20} className="text-white" />
                    ) : (
                      <FiPlus size={20} className="text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-6 transition-colors duration-300 ${bgClasses}`}
                    >
                      <p className="text-[16px]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
