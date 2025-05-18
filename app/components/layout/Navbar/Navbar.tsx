"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    subItems: [
      { label: "For Students", href: "/solutions/students" },
      { label: "For Professionals", href: "/solutions/professionals" },
      { label: "For Businesses", href: "/solutions/businesses" },
    ],
  },
  { label: "Our AI Manifesto", href: "/ai-manifesto" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Toggle dropdown on hover or click
  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className="bg-main-bg text-white sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/static/assets/Logo.png"
              alt="Logo"
              width={120}
              height={40}
            />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item, index) =>
            item.subItems ? (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center space-x-1 hover:text-purple-300 transition"
                  onClick={() => {
                    if (activeDropdown === item.label) {
                      setActiveDropdown(null);
                    } else {
                      setActiveDropdown(item.label);
                    }
                  }}
                >
                  <span className="text-[16px]">{item.label}</span>
                  <FiChevronDown size={16} />
                </button>

                {/* Dropdown with animation */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      className="absolute left-0 mt-2 w-48 bg-white-bg text-main-bg rounded-md shadow-lg overflow-hidden z-50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul className="py-2">
                        {item.subItems.map((si) => (
                          <motion.li
                            key={si.label}
                            whileHover={{
                              x: 5,
                              backgroundColor: "rgba(243, 244, 246, 1)",
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Link
                              href={si.href}
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              {si.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-purple-300 transition"
                >
                  {item.label}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Desktop actions */}
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link
            href="/get-started"
            className="bg-purple-600 hover:bg-purple-700 font-medium py-2 px-6 rounded-full shadow-lg transition flex items-center"
          >
            <span>Get Start</span>
            <GoArrowUpRight className="ml-2" size={18} />
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileOpen((o) => !o)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu (animated) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden overflow-hidden bg-main-bg"
          >
            <ul className="flex flex-col px-4 py-2 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {item.subItems ? (
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex justify-between items-center py-2 cursor-pointer hover:text-purple-300 transition">
                        {item.label}
                        <FiChevronDown
                          size={16}
                          className="group-open:rotate-180 transition"
                        />
                      </summary>
                      <ul className="pl-4 space-y-1">
                        {item.subItems.map((si, subIndex) => (
                          <motion.li
                            key={si.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.1 + subIndex * 0.05,
                            }}
                          >
                            <Link
                              href={si.href}
                              className="block py-1 hover:text-purple-300"
                            >
                              {si.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-purple-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}

              {/* Mobile actions */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: NAV_ITEMS.length * 0.05 }}
              >
                <button className="flex items-center space-x-1 py-2 hover:text-purple-300 transition">
                  <span>🇺🇸 EN</span>
                  <FiChevronDown size={16} />
                </button>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: (NAV_ITEMS.length + 1) * 0.05,
                }}
              >
                <Link
                  href="/get-started"
                  className=" text-center bg-purple-600 hover:bg-purple-700 font-medium py-2 rounded-full shadow-lg transition flex items-center justify-center"
                >
                  <span>Get Start</span>
                  <GoArrowUpRight className="ml-2" size={18} />
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
