// src/components/ParticlesBackground.js
import React, { useEffect } from "react";
import particlesConfig from "../config/particlesjs-config.json";

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    } else {
      console.error("particlesJS no se cargó. Revisa el script en index.html.");
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
        
      
      }}
    ></div>
  );
};

export default ParticlesBackground;
