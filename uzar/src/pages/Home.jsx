import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Card />
        <Button />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
