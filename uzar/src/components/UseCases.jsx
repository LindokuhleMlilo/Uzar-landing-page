import React from "react";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent, Card } from "./Card";
import { FaShieldAlt, FaClock, FaCoins, FaGlobe } from "react-icons/fa"; // Importing icons

const UseCases = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Why Businesses Prefer UZAR
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Businesses choose UZAR because it operates smoothly across various applications and
            platforms worldwide, leveraging blockchain technology for faster,
            more cost-effective, and highly customizable transactions compared to
            traditional financial systems.
          </p>
        </motion.div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:max-w-5xl lg:gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-purple-200 hover:shadow-xl transition-all duration-300 h-64 rounded-lg">
              <CardHeader className="flex flex-col items-center">
                <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
                <CardTitle className="text-blue-600">Stable and Compliant</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                UZAR is fully reserved and operates under regulatory oversight.
                Its reserves are securely held at regulated financial institutions,
                with monthly attestations published for transparency.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 h-64 rounded-lg">
              <CardHeader className="flex flex-col items-center">
                <FaClock className="text-purple-600 text-4xl mb-4" />
                <CardTitle className="text-purple-600">Real-Time Settlement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                UZAR transactions settle within seconds, anytime and anywhere, 24/7.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 h-64 rounded-lg">
              <CardHeader className="flex flex-col items-center">
                <FaCoins className="text-blue-600 text-4xl mb-4" />
                <CardTitle className="text-blue-600">Minimal Transaction Costs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Global payments with UZAR cost less than a cent, making it accessible and affordable for everyone.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 h-64 rounded-lg">
              <CardHeader className="flex flex-col items-center">
                <FaGlobe className="text-purple-600 text-4xl mb-4" />
                <CardTitle className="text-purple-600">Borderless and Accessible</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Anyone with an internet connection and a digital wallet can send and receive UZAR.
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;