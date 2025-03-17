import React from "react";
import { motion } from "framer-motion";

const HowUzarWorks = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              How{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                UZAR Works
              </span>
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              Minting UZAR is straightforward and designed to be accessible to everyone.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Acquire UUSD through supported exchanges or platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                <span>Connect your wallet to the UZAR platform</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Mint UZAR at a 1:1 peg with your UUSD</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                <span>Use UZAR for remittances, payments, or other transactions</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg overflow-hidden">
              <div className="absolute inset-1 rounded-xl bg-background flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-lg">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 text-sm font-medium">UZAR Minting Interface</div>
                    </div>
                  </div>
                  <div className="absolute top-16 left-0 w-full p-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Amount to Mint</label>
                        <div className="flex items-center border rounded-md p-2">
                          <input type="text" value="1000" readOnly className="w-full bg-transparent outline-none" />
                          <span className="font-medium">UUSD</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">You Will Receive</label>
                        <div className="flex items-center border rounded-md p-2 bg-gradient-to-r from-blue-50 to-purple-50">
                          <input type="text" value="1000" readOnly className="w-full bg-transparent outline-none" />
                          <span className="font-medium text-blue-600">UZAR</span>
                        </div>
                      </div>
                      <button className="w-full py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium">
                        Mint UZAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowUzarWorks;