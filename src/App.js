import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import InterestCalculator from "./pages/InterestCalculator";
import "./App.css";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle("dark-theme");
    };

    return (
        <Router>
            <Navbar toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/interestcalculator" element={<InterestCalculator />} />
            </Routes>
        </Router>
    );
}

export default App;