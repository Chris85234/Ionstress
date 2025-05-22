import React from "react";
import Hero from "../components/hero";
import OurSolutions from "../components/OurSolutions";
import PropellerSection from "../components/PropellerSection";
import EnergyCarrousel from "../components/EnergyCarrousel";
import EnergyServices from "../components/EnergyServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurSolutions />
      <PropellerSection />
      <EnergyCarrousel />
      <EnergyServices />
    </div>
  );
};

export default Home;
