import React, { useState } from "react";
import "./Form.css";

function Form({ onCalculate }) {
    const [startingAmount, setStartingAmount] = useState("0");
    const [monthlySavings, setMonthlySavings] = useState("0");
    const [interestRate, setInterestRate] = useState("");
    const [timePeriod, setTimePeriod] = useState("");
    const [investmentType, setInvestmentType] = useState("compound");

    const handleInvestmentTypeChange = (e) => {
        const selectedType = e.target.value;
        if (selectedType === 'mixed') {
            alert("The Mixed Portfolio feature is coming soon!");
            setInvestmentType("compound"); // Reset to default option
        } else {
            setInvestmentType(selectedType);
        }
    };

    const handleTestData = () => {
        setInvestmentType("stocks");
        setStartingAmount("10000");
        setMonthlySavings("500");
        setInterestRate("10");
        setTimePeriod("40");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate({
            startingAmount: Number(startingAmount),
            monthlySavings: Number(monthlySavings),
            interestRate: Number(interestRate),
            timePeriod: Number(timePeriod),
            investmentType: investmentType
        });
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Investment Growth Simulator</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="investmentType">Investment Type:</label>
                    <select
                        id="investmentType"
                        value={investmentType}
                        onChange={handleInvestmentTypeChange}
                        required
                    >
                        <option value="compound">High-Yield Savings Account</option>
                        <option value="stocks">Stocks & Index Funds</option>
                        <option value="mixed">Mixed Portfolio</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="startingAmount">Initial Investment ($):</label>
                    <input
                        type="number"
                        id="startingAmount"
                        value={startingAmount}
                        onChange={(e) => setStartingAmount(e.target.value)}
                        min="0"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="monthlySavings">Monthly Contribution ($):</label>
                    <input
                        type="number"
                        id="monthlySavings"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(e.target.value)}
                        min="0"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="interestRate">
                        {investmentType === "compound" ? "Interest Rate" : "Expected Return Rate"} (%):
                    </label>
                    <input
                        type="number"
                        id="interestRate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timePeriod">Time Period (years):</label>
                    <input
                        type="number"
                        id="timePeriod"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <div className="button-group">
                    <button type="submit" className="form-button">Simulate</button>
                    <button 
                        type="button" 
                        onClick={handleTestData}
                        className="form-button test-button"
                    >
                        Test Data
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;