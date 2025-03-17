import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

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
              Use Cases
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            UZAR opens up a world of possibilities
          </p>
        </motion.div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:max-w-5xl lg:gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-blue-600">Remittances</CardTitle>
              </CardHeader>
              <CardContent>
                Send money to family and friends in Africa without the hassle of high fees and long wait times.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-purple-600">Business Transactions</CardTitle>
              </CardHeader>
              <CardContent>Facilitate cross-border business deals and payments with ease.</CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-blue-600">Access to Global Markets</CardTitle>
              </CardHeader>
              <CardContent>
                African entrepreneurs and investors can participate in the global financial landscape.
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;