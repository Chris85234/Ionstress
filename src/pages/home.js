import React from "react";
import Navbar from "../components/navbar.js";
import Example from "../components/hero.js";
import OurSolutions from "../components/OurSolutions";
import PropellerSection from "../components/PropellerSection.js";
import EnergyCarrousel from "../components/EnergyCarrousel.js";
import EnergyServices from "../components/EnergyServices.js";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Example />
      <OurSolutions/>
      <PropellerSection/>
      <EnergyCarrousel/>
      <EnergyServices/>
      
    </div>
  );
};

export default Home;
