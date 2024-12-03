import React, { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';
import Results from './components/Results';

function App() {
    const [results, setResults] = useState(null);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle("dark-theme");
    };

    const calculateSavings = ({ startingAmount, monthlySavings, interestRate, timePeriod }) => {
        let totalSavings = startingAmount;
        let totalContributions = startingAmount;
        const totalMonths = timePeriod * 12;
        let monthlyBalances = [startingAmount];

        for (let i = 0; i < totalMonths; i++) {
            totalSavings = (totalSavings + monthlySavings) * (1 + interestRate / 12);
            monthlyBalances.push(totalSavings);
            totalContributions += monthlySavings;
        }

        const interestEarned = totalSavings - totalContributions;

        setResults({
            totalSavings: totalSavings.toFixed(2),
            interestEarned: interestEarned.toFixed(2),
            monthlyBalances,
        });
    };

    return (
        <div className="app-container">
            <button onClick={toggleTheme}>
                {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
            </button>
            <Home />
            <Form onCalculate={calculateSavings} />
            <Results results={results} />
        </div>
    );
}

export default App;