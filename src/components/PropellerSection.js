// src/components/PropellerSection.js
import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import "../styles/styles.css";

const PropellerSection = () => {
  return (
    <section className="propeller-section">
      {/* Fondo de partículas en la sección */}
      <ParticlesBackground />
      {/* Contenedor de la card de información */}
      <div className="card-container">
        <div className="text-card">
          <h2 className="section-heading">Innovación en Energía Renovable</h2>
          <p className="section-description">
            Nuestro enfoque combina tecnología de drones y análisis avanzado para transformar la forma de inspeccionar y optimizar sistemas energéticos. Con una solución integral, aplicamos inteligencia artificial para detectar y mejorar el rendimiento de infraestructuras energéticas clave, impulsando la eficiencia y la sostenibilidad de nuestro planeta.
          </p>
          <button className="btn-button">Descubrir más</button>
        </div>
      </div>
      {/* Imagen sobrepuesta (a la derecha) – utiliza la imagen de aerogenerador */}
      <img 
        src="/assets/propeller.png" 
        alt="Aerogenerador Animado" 
        className="propeller-image-overlay" 
      />
    </section>
  );
};

export default PropellerSection;

