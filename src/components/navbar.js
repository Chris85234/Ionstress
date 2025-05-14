import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Importamos los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">IonSpark</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
