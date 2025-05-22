import React from "react";
import ResultsOverview from "../components/ResultsOverview";
import "../styles/styles.css";

const Results = () => {
  return (
    <section className="results-section">
      <h1 className="results-title">Your results</h1>
      <ResultsOverview />
    </section>
  );
};

export default Results;
