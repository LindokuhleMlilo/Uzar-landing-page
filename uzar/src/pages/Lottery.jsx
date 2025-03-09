import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Lottery = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Lottery content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Lottery;