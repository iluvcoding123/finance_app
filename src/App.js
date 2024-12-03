import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InterestCalculator from "./pages/InterestCalculator";
import PageButtons from "./components/PageButtons"; // Updated import
import "./App.css";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle("dark-theme");
    };

    return (
        <Router>
            <div className="app-container">
                {/* Theme Toggle Button */}
                <button onClick={toggleTheme} className="theme-toggle">
                    {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
                </button>

                {/* Page Buttons */}
                <PageButtons />

                {/* Page Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/interestcalculator" element={<InterestCalculator />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;