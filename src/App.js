import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Solutions from "./components/solutions";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "../styles/styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Solutions />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
