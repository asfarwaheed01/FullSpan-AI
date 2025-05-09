"use client";

import React from "react";
import Link from "next/link";
import {
  FiHome,
  FiSearch,
  FiMapPin,
  FiAlertTriangle,
  FiArrowLeft,
  FiCompass,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        className="mb-8 relative"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-gray-200 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <FiCompass size={200} />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <FiSearch size={60} className="text-purple-600" />
          </motion.div>

          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FiAlertTriangle size={120} className="text-purple-500" />
          </motion.div>

          <motion.div
            className="absolute top-0 right-0"
            animate={{ rotate: [0, 20, 0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <FiMapPin size={40} className="text-red-500" />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl font-bold mb-4 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl font-semibold mb-6 text-gray-700"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-8 max-w-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        Oops! We couldn&apos;t find the page you&apos;re looking for. It might
        have been moved, deleted, or never existed.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <FiHome size={18} />
            <span>Go Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-5 rounded-lg transition-all duration-200"
          >
            <FiArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
