import React from "react";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/logo.png" alt="IonSpark Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
