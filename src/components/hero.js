import React from "react";
import "./styles/styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <img src="./assets/logo.png" alt="IonSpark Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/technology">Technology</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
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
