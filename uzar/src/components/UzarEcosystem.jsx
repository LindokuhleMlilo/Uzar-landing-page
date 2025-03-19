import React from "react";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent, CardDescription, Card, CardFooter } from "./Card";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ThreeDBackground from "./ThreeDBackground"; 

const UzarEcosystem = () => {
  return (
    <section id="dapps" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            UZAR{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore our dapps built on the UZAR stablecoin
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 lg:max-w-5xl mt-8">
          {/* Card 1: Sweepstake Lottery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Card className="flex flex-col bg-purple-200 h-full border-none shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <CardHeader>
                <CardTitle className="text-blue-600">Sweepstake Lottery</CardTitle>
                <CardDescription>Try your luck in our blockchain-based lottery system</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p>
                  Participate in transparent, fair lottery games using UZAR tokens. Win big with minimal entry fees.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  asChild
                >
                  <Link href="/lottery">
                    Enter Lottery
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Card 2: Offramp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Card className="flex flex-col bg-purple-200  h-full border-none shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-purple-600 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="text-purple-600">Offramp</CardTitle>
                <CardDescription>Convert your crypto to fiat seamlessly</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p>
                  Our offramp solution allows you to convert UZAR to ZAR and other currencies with minimal fees and
                  fast processing times.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  asChild
                >
                  <Link href="/offramp">
                    Use Offramp
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Card 3: Polymarkets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Card className="flex flex-col bg-purple-200  h-full border-none shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <CardHeader>
                <CardTitle className="text-blue-600">Polymarkets</CardTitle>
                <CardDescription>Prediction markets powered by UZAR</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p>
                  Trade on prediction markets using UZAR tokens. Bet on real-world events with transparent odds and
                  instant settlements.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  asChild
                >
                  <Link href="/polymarkets">
                    Explore Markets
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UzarEcosystem;