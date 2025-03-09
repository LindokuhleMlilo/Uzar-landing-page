import React from "react";
import { motion } from "framer-motion";
import Card from "./Card"; 
const TheProblem = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            The{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Problem
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Africa faces significant hurdles when it comes to remittances
          </p>
        </motion.div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:max-w-5xl lg:gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
           <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 shadow-[rgba(59,130,246,0.3)] hover:shadow-[rgba(147,51,234,0.5)]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">High Costs</h3>
                <p className="mt-2 text-muted-foreground">
                  Traditional remittance methods often involve hefty fees and unfavorable exchange rates.
                </p>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 shadow-[rgba(59,130,246,0.3)] hover:shadow-[rgba(147,51,234,0.5)]">

              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-600">Lack of Accessibility</h3>
                <p className="mt-2 text-muted-foreground">
                  Many people in Africa lack access to reliable banking services, making it difficult to receive
                  remittances.
                </p>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 shadow-[rgba(59,130,246,0.3)] hover:shadow-[rgba(147,51,234,0.5)]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">Lengthy Transfer Times</h3>
                <p className="mt-2 text-muted-foreground">
                  Cross-border transactions can take days or even weeks to complete.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;