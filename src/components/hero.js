import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const Hero = () => {
  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Drones that detect the power of the planet</h1>
      <p>We specialize in aerial inspections to improve the efficiency and sustainability of renewable energy systems.</p>
      <button className="btn">Get Inspection</button>
    </motion.div>
  );
};

export default Hero;
