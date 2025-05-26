// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { tabsData } from "@/app/data/homeData";
// import { HiArrowRight } from "react-icons/hi";

// const TabsSection = () => {
//   const [activeTab, setActiveTab] = useState("ai-readiness");

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section className="py-16 md:py-24 bg-white-bg">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center md:items-start gap-10 lg:gap-16">
//           {/* Left Column */}
//           <motion.div
//             className="w-full lg:w-1/2"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={containerVariants}
//           >
//             {/* Heading */}
//             <motion.h2
//               className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-tight mb-6"
//               variants={itemVariants}
//             >
//               {tabsData.heading.start}
//               <span className="text-[#8624FF]">
//                 {tabsData.heading.highlight}
//               </span>
//               {tabsData.heading.end}
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               className="text-[15px] md:text-[16px] text-gray-700 mb-8"
//               variants={itemVariants}
//             >
//               {tabsData.description}
//             </motion.p>

//             {/* CTA Button */}
//             <motion.div variants={itemVariants}>
//               <Link
//                 href={tabsData.ctaButton.url}
//                 className="inline-flex items-center text-[#8624FF] hover:text-purple-700 text-[15px] md:text-[16px] font-medium group transition-colors"
//               >
//                 {tabsData.ctaButton.text}
//                 <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Tabs and Images */}
//           <div className="w-full lg:w-1/2">
//             {/* Tabs */}
//             <motion.div
//               className="flex flex-wrap mb-6 bg-gradient-to-r from-[#1B054C] via-[#2D1178] to-[#4717A0] rounded-[10px] p-2"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {tabsData.tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`rounded-[10px] text-[13px] sm:text-[14px] md:text-[16px] font-medium py-2 px-3 md:px-4 transition-all whitespace-nowrap
//                     ${
//                       activeTab === tab.id
//                         ? "bg-[#8624FF] text-white"
//                         : "text-white hover:bg-purple-900/30"
//                     }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </motion.div>

//             {/* Images Container - overlapping style */}
//             <div className="relative h-[400px] md:h-[450px] mt-10">
//               <AnimatePresence mode="wait">
//                 {activeTab === "ai-readiness" ? (
//                   <motion.div
//                     key="analytics-group"
//                     className="relative h-full"
//                     initial="hidden"
//                     animate="visible"
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     variants={imageVariants}
//                   >
//                     {/* Analytics Image (left, behind) */}
//                     <div className="absolute left-0 top-0 w-[75%] h-[90%] rounded-3xl overflow-hidden">
//                       <Image
//                         src={tabsData.images.analytics}
//                         alt="Analytics Dashboard"
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>

//                     {/* Automation Image (right, front) */}
//                     <div className="absolute -right-10 top-20 w-[75%] h-[90%] rounded-3xl overflow-hidden z-10">
//                       <Image
//                         src={tabsData.images.automation}
//                         alt="Task Automation"
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="automation-group"
//                     className="relative h-full"
//                     initial="hidden"
//                     animate="visible"
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     variants={imageVariants}
//                   >
//                     <div className="absolute left-0 top-0 w-[75%] h-[90%] rounded-3xl overflow-hidden z-10">
//                       <Image
//                         src={tabsData.images.analytics}
//                         alt="Analytics Dashboard"
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>

//                     <div className="absolute right-0 top-20 w-[75%] h-[100%] rounded-3xl overflow-hidden">
//                       <Image
//                         src={tabsData.images.automation}
//                         alt="Task Automation"
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TabsSection;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { tabsData } from "@/app/data/homeData";
import { HiArrowRight } from "react-icons/hi";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("ai-readiness");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-10 lg:gap-16">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Heading */}
            <motion.h2
              className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              {tabsData.heading.start}
              <span className="text-[#8624FF]">
                {tabsData.heading.highlight}
              </span>
              {tabsData.heading.end}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[15px] md:text-[16px] text-gray-700 mb-8"
              variants={itemVariants}
            >
              {tabsData.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                href={tabsData.ctaButton.url}
                className="inline-flex items-center text-[#8624FF] hover:text-purple-700 text-[15px] md:text-[16px] font-medium group transition-colors"
              >
                {tabsData.ctaButton.text}
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Tabs and Images */}
          <div className="w-full lg:w-1/2">
            {/* Tabs - Horizontal Scrollable on Mobile */}
            <motion.div
              className="mb-6 bg-gradient-to-r from-[#1B054C] via-[#2D1178] to-[#4717A0] rounded-[10px] p-2 overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex gap-2 min-w-max">
                {tabsData.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-[10px] text-[13px] sm:text-[14px] md:text-[16px] font-medium py-2 px-3 md:px-4 transition-all whitespace-nowrap flex-shrink-0
                      ${
                        activeTab === tab.id
                          ? "bg-[#8624FF] text-white"
                          : "text-white hover:bg-purple-900/30"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Images Container - Mobile Optimized */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-6 lg:mt-10 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === "ai-readiness" ? (
                  <motion.div
                    key="analytics-group"
                    className="relative h-full w-full"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    variants={imageVariants}
                  >
                    {/* Mobile: Stack images vertically */}
                    <div className="block sm:hidden">
                      {/* First Image */}
                      <div className="absolute left-0 top-0 w-full h-[60%] rounded-2xl overflow-hidden">
                        <Image
                          src={tabsData.images.analytics}
                          alt="Analytics Dashboard"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      {/* Second Image */}
                      <div className="absolute left-0 bottom-0 w-full h-[60%] rounded-2xl overflow-hidden z-10">
                        <Image
                          src={tabsData.images.automation}
                          alt="Task Automation"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    {/* Tablet and Desktop: Overlapping layout */}
                    <div className="hidden sm:block">
                      {/* Analytics Image (left, behind) */}
                      <div className="absolute left-0 top-0 w-[70%] sm:w-[75%] h-[85%] sm:h-[90%] rounded-2xl lg:rounded-3xl overflow-hidden">
                        <Image
                          src={tabsData.images.analytics}
                          alt="Analytics Dashboard"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Automation Image (right, front) */}
                      <div className="absolute right-0 sm:-right-4 lg:-right-10 top-16 sm:top-20 w-[70%] sm:w-[75%] h-[85%] sm:h-[90%] rounded-2xl lg:rounded-3xl overflow-hidden z-10">
                        <Image
                          src={tabsData.images.automation}
                          alt="Task Automation"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="automation-group"
                    className="relative h-full w-full"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    variants={imageVariants}
                  >
                    {/* Mobile: Stack images vertically */}
                    <div className="block sm:hidden">
                      {/* First Image */}
                      <div className="absolute left-0 top-0 w-full h-[60%] rounded-2xl overflow-hidden z-10">
                        <Image
                          src={tabsData.images.analytics}
                          alt="Analytics Dashboard"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      {/* Second Image */}
                      <div className="absolute left-0 bottom-0 w-full h-[60%] rounded-2xl overflow-hidden">
                        <Image
                          src={tabsData.images.automation}
                          alt="Task Automation"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    {/* Tablet and Desktop: Overlapping layout */}
                    <div className="hidden sm:block">
                      <div className="absolute left-0 top-0 w-[70%] sm:w-[75%] h-[85%] sm:h-[90%] rounded-2xl lg:rounded-3xl overflow-hidden z-10">
                        <Image
                          src={tabsData.images.analytics}
                          alt="Analytics Dashboard"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      <div className="absolute right-0 sm:right-0 top-16 sm:top-20 w-[70%] sm:w-[75%] h-[85%] sm:h-[100%] rounded-2xl lg:rounded-3xl overflow-hidden">
                        <Image
                          src={tabsData.images.automation}
                          alt="Task Automation"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
