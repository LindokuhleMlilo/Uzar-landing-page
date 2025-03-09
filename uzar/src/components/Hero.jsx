import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button"; 

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 "> 

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  UZAR:
                </span>{" "}
                Bridging the Gap with ZAR Rand
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A stablecoin pegged to the South African ZAR rand, uniquely positioned to address the inefficiencies
                and high costs associated with cross-border money transfers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <Link to="#dapps">Explore Dapps</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="#about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    UZAR
                  </h3>
                  <p className="text-xl text-muted-foreground">1 UZAR = 1 ZAR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;