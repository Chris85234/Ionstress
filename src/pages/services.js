import React from "react";

const services = [
  { title: "Aerial Inspections", description: "Precision monitoring of solar, wind, and hydroelectric plants using drones." },
  { title: "Data Analysis", description: "Advanced telemetry and AI-driven analytics for efficiency optimization." },
  { title: "Consulting", description: "Expert guidance on implementing renewable energy solutions." }
];

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
