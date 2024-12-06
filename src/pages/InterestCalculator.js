import React, { useState } from "react";
import "./InterestCalculator.css";
import Form from "../components/Form";
import Results from "../components/Results";

function InterestCalculator() {
    const [results, setResults] = useState(null);

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
        <div className="calculator-container">
            <Form onCalculate={calculateSavings} />
            <Results results={results} />
        </div>
    );
}

export default InterestCalculator;