import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const offramp = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* offramp content here */}
      </main>
      <Footer />
    </div>
  );
};

export default offramp;