import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

import Results from "./pages/Results";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/results" element={<Results />} />
        
      </Routes>
    </>
  );
}

export default App;
