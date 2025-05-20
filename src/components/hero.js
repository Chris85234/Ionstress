// src/components/Hero.js
import React from "react";
import "../styles/styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-mask"></div> {/* Crea la máscara SVG para el efecto */}
      <div className="hero-content">
        <h1 className="hero-title">Drones that detect the power of the planet</h1>
        <p className="hero-description">
          We specialize in aerial inspections to improve the efficiency and sustainability of renewable energy systems.
        </p>
        <button class="btn-button">Get inspection</button>
      </div>
    </section>
  );
};

export default Hero;
