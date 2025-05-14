import react from "react";
import "../styles/styles.css";

const solutions = [
  { title: "Solar Energy", description: "Uses sunlight to generate electricity through photovoltaic panels and solar thermal collectors." },
  { title: "Wind Energy", description: "Converts kinetic energy into electricity using wind turbines." },
  { title: "Hydraulic Energy", description: "Generates electricity from the movement of water in hydroelectric plants." }
];

const Solutions = () => {
  return (
    <div className="solutions">
      <h2>Our Solutions</h2>
      <div className="solutions-container">
        {solutions.map((sol, index) => (
          <div key={index} className="solution-card">
            <h3>{sol.title}</h3>
            <p>{sol.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
