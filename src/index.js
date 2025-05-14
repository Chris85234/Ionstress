import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Services from "./pages/services";
import ContactPage from "./pages/ContactPage";
import "./styles/styles.css";

// Nueva forma en React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </Router>
);
