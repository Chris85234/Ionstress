import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import OurSolutions from "./components/OurSolutions";
import PropellerSection from "./components/PropellerSection";
import EnergyCarrousel from "./components/EnergyCarrousel";
import EnergyServices from "./components/EnergyServices";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurSolutions />
      <PropellerSection />
      <EnergyCarrousel />
      <EnergyServices />
    </div>
  );
}

export default App;

