import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// Registrar los elementos en Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ResultsOverview = () => {
  const monthlyData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Performance Over Time",
        data: [90, 85, 100, 95, 110, 105, 100, 107, 99, 115, 112, 108],
        borderColor: "#00FF00",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: "#00FF00",
      },
    ],
  };

  return (
    <div className="results-card">
      <h2 className="results-title">Your results</h2>
      <Line data={monthlyData} className="results-chart" />
      <div className="results-icons">
        <img src="/icons/person.svg" alt="User" />
        <img src="/icons/star.svg" alt="Favorite" />
        <img src="/icons/settings.svg" alt="Settings" />
      </div>
    </div>
  );
};

export default ResultsOverview;
