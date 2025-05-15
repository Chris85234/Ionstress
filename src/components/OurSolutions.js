import React from 'react';
import "../styles/styles.css";

const OurSolutions = () => {
  return (
    <section className="our-solutions">
      <div className="solutions-container">
        <h2 className="section-title">Our Solutions</h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <h3 className="solution-title">Solar Energy</h3>
            <p className="solution-description">
              Harness the power of the sun to generate clean and sustainable energy.
            </p>
          </div>
          <div className="solution-card">
            <h3 className="solution-title">Wind Energy</h3>
            <p className="solution-description">
              Utilizes wind turbines to convert wind into electricity efficiently.
            </p>
          </div>
          <div className="solution-card">
            <h3 className="solution-title">Hydraulic Energy</h3>
            <p className="solution-description">
              Uses water flow to produce energy with minimal environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
