
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./contacpage/pages/home";
import Services from "./pages/services";
import ContactPage from "./pages/contactpage";
import "../styles/styles.css";

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
