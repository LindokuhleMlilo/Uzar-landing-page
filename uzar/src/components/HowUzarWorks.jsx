import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HowUzarWorks = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HOW UZAR WORKS
      </motion.h2>

      {/* Subtext Animation */}
      <motion.p
        className="text-lg text-muted-foreground mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        One UZAR is equivalent to one South African Rand
      </motion.p>

      {/* Card Section */}
      <div className="flex items-center justify-center mt-12 gap-12 relative">
        {/* Left Card */}
        <motion.div
          className="w-84 h-32 p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl rounded-xl flex flex-col justify-center items-center border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src="./src/assets/images/universal.png" alt="UZAR Logo" className="w-12 h-12 mb-2" />
          <span className="text-xl font-semibold">1 UZAR</span>
        </motion.div>

        {/* Arrows Positioned Horizontally */}
        <div className="flex items-center gap-8">
          <motion.div
            className="text-4xl text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FaArrowLeft />
          </motion.div>

          <motion.div
            className="text-4xl text-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaArrowRight />
          </motion.div>
        </div>

        {/* Right Card */}
        <motion.div
          className="w-84 h-32 p-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-xl rounded-xl flex flex-col justify-center items-center border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-sm font-medium">SOUTH AFRICAN</span>
          <span className="text-xl font-semibold">1 ZAR</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowUzarWorks;
