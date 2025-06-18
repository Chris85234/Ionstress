import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import "../src/styles/HomePage/navbar.css";
import "../src/styles/HomePage/Hero.css";
import "../src/styles/HomePage/ourSolutions.css";
import "../src/styles/HomePage/propellerSection.css";
import "../src/styles/HomePage/energyCarrousel.css";
import "../src/styles/HomePage/energyServices.css";
import "../src/styles/styles.css"
import LogInPage from "./pages/LoGin.js";


  



function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<LogInPage />} /> {/* Uniformar con minúsculas */}
            </Routes>
        </>
    );
}

export default App;
