import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Card } from "../components/Card"; 
import Button from "../components/Button";
import TheProblem from "../components/TheProblem";
import TheUzarSolution from "../components/TheUzarSolution";
import HowUzarWorks from "../components/HowUzarWorks";
import UseCases from "../components/UseCases";
import UzarEcosystem from "../components/UzarEcosystem";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <UseCases />
        <TheProblem />
        <TheUzarSolution />
        <HowUzarWorks />
        <UzarEcosystem />
        <Card />
        <Button />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
