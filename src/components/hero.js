// src/components/Hero.js
import React from "react";
import "../styles/styles.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* La sección Hero utiliza el fondo-imagen */}
      <div className="hero-content">
        <h1 className="hero-title">Drones that detect the power of the planet</h1>
        <p className="hero-description">
          We specialize in aerial inspections to improve the efficiency and sustainability of renewable energy systems.
        </p>
        <button className="cta-button">Get inspection</button>
      </div>
    </section>
  );
};

export default Hero;
