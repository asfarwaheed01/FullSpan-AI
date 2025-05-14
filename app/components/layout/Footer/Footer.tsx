"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  trustedCompanies,
  quickLinks,
  helpInfo,
  socialMedia,
  legalLinks,
} from "../../../data/footerData";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-main-bg text-white py-16">
      <motion.div
        className="container mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-center text-lg mb-10">
          <span className="text-white">TRUSTED BY</span>{" "}
          <span className="text-purple-500">150+ MARKETING</span>{" "}
          <span className="text-white">TEAMS</span>
        </p>

        <motion.div
          className="flex flex-wrap justify-between items-center gap-8 md:gap-16"
          variants={staggerChildren}
        >
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={index}
              className=" hover:grayscale cursor-pointer transition-all duration-300"
              variants={fadeInUp}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-[31px] w-auto object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="container mx-auto">
        <hr className="border-gray-800 my-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <img
                src="/static/assets/Logo.png"
                alt="Logo"
                className="h-[30px] w-[119px] object-cover"
              />
            </Link>
            <p className="text-gray-400 text-[16px] text-left leading-relaxed">
              FullSpan AI Solutions empowers students, professionals, and
              businesses with intelligent, tailored AI tools that drive career
              growth and business innovation in today&apos;s AI-powered world.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1"
          >
            <h3 className="text-lg text-[18px] font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-[16px]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Need Help */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1"
          >
            <h3 className="text-[18px] font-bold mb-6">Need Help</h3>
            <ul className="space-y-4">
              {helpInfo.map((info, index) => (
                <li key={index}>
                  <Link
                    href={info.url}
                    className="text-gray-400 hover:text-purple-400  transition-colors text-[16px]"
                  >
                    {info.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-3 mt-6">
              {socialMedia.map((social, index) => {
                let Icon;
                switch (social.icon) {
                  case "twitter":
                    Icon = FaTwitter;
                    break;
                  case "facebook":
                    Icon = FaFacebook;
                    break;
                  case "linkedin":
                    Icon = FaLinkedinIn;
                    break;
                  case "instagram":
                    Icon = FaInstagram;
                    break;
                  default:
                    Icon = FaTwitter;
                }

                return (
                  <Link
                    key={index}
                    href={social.url}
                    className="bg-none hover:bg-purple-600 transition-colors w-10 h-10 border-[1px] border-[#030205] rounded-md flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1"
          >
            <div className="bg-[#0D0126] rounded-xl p-6 border border-gray-800">
              <h3 className="text-[15px] font-medium mb-2  text-center">
                Stay Updated With The Latest AI Insights And FullSpan News.
              </h3>

              <form onSubmit={handleSubmit} className="mt-6">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full outline-none bg-none border-b-2 border-[#251740] px-4 py-3 text-white placeholder-gray-500 mb-4"
                  required
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[140px] text-[14px] bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            © 2024 AI Career Guidance. All Rights Reserved.
          </motion.p>

          <motion.div
            className="flex items-center space-x-4 text-sm text-gray-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.url}
                  className="hover:text-purple-400 transition-colors"
                >
                  {link.title}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-700">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
