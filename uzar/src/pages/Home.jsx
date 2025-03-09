import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Add other sections here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
