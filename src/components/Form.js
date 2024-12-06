import React, { useState } from "react";
import "./Form.css";

function Form({ onCalculate }) {
    const [startingAmount, setStartingAmount] = useState("");
    const [monthlySavings, setMonthlySavings] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [timePeriod, setTimePeriod] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs
        if (
            isNaN(startingAmount) || isNaN(monthlySavings) ||
            isNaN(interestRate) || isNaN(timePeriod) ||
            startingAmount < 0 || monthlySavings < 0 ||
            interestRate < 0 || timePeriod < 0
        ) {
            alert("Please enter valid positive numbers for all fields.");
            return;
        }

        // Pass data back to App.js
        onCalculate({
            startingAmount: parseFloat(startingAmount),
            monthlySavings: parseFloat(monthlySavings),
            interestRate: parseFloat(interestRate) / 100, // Convert to decimal
            timePeriod: parseFloat(timePeriod),
        });

        // Clear the form fields (optional)
        setStartingAmount("");
        setMonthlySavings("");
        setInterestRate("");
        setTimePeriod("");
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Compound Interest Calculator</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Starting Amount:</label>
                    <input
                        type="number"
                        value={startingAmount}
                        onChange={(e) => setStartingAmount(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Monthly Savings:</label>
                    <input
                        type="number"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Interest Rate (%):</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Time Period (Years):</label>
                    <input
                        type="number"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-button">Calculate</button>
            </form>
        </div>
    );
}

export default Form;