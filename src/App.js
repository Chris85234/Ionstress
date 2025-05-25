import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import "../src/styles/HomePage/navbar.css";
import "../src/styles/HomePage/Hero.css";
import "../src/styles/HomePage/ourSolutions.css";
import "../src/styles/HomePage/propellerSection.css";
import "../src/styles/HomePage/energyCarrousel.css";
import "../src/styles/HomePage/energyServices.css";




function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />  
            </Routes>
        </>
    );
}

export default App;
