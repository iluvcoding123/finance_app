import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GrowthSim from "./pages/GrowthSim";
import "./App.css";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle("dark-theme");
    };

    React.useEffect(() => {
        document.body.classList.add("dark-theme");
    }, []);

    return (
        <Router>
            <Navbar toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/growthsim" element={<GrowthSim />} />
            </Routes>
        </Router>
    );
}

export default App;