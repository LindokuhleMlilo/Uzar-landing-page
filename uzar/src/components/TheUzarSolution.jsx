import React from "react";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent, Card } from "./Card";
import { FaSyncAlt as RefreshCw, FaGlobe as Globe, FaShieldAlt as Shield } from "react-icons/fa"; // Import icons from React Icons

const TheUzarSolution = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <RefreshCw className="h-8 w-8 text-blue-500" /> {/* RefreshCw icon */}
                  <CardTitle>Fast & Cost-Effective</CardTitle>
                </CardHeader>
                <CardContent>
                  UZAR leverages blockchain technology to provide swift and affordable remittance options.
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Globe className="h-8 w-8 text-purple-600" /> {/* Globe icon */}
                  <CardTitle>Accessibility for All</CardTitle>
                </CardHeader>
                <CardContent>Accessible to anyone with an internet connection and a digital wallet.</CardContent>
              </Card>
              <Card className="col-span-2 border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-8 w-8 text-blue-500" /> {/* Shield icon */}
                  <CardTitle>Secure and Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  Built on a blockchain, UZAR transactions are transparent and secure, reducing the risk of fraud.
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              The{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                UZAR Solution
              </span>
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              UZAR offers a transformative solution to these challenges by leveraging blockchain technology to
              create a stablecoin that's accessible, fast, and secure.
            </p>
            <p className="text-muted-foreground">
              Our solution addresses the core issues facing remittances in Africa, providing a reliable alternative
              to traditional banking systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheUzarSolution;