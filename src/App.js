// src/App.js
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import OurSolutions from "./components/OurSolutions";
import PropellerSection from "./components/PropellerSection";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurSolutions />
      <PropellerSection />
    </div>
  );
}

export default App;
