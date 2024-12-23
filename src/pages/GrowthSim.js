import React, { useState } from "react";
import "./GrowthSim.css";
import Form from "../components/Form";
import Results from "../components/Results";
import Chart from "../components/Chart";

function GrowthSim() {
    const [results, setResults] = useState(null);
    const [chartData, setChartData] = useState(null);

    // Convert APY to monthly rate
    const getMonthlyRateFromAPY = (apy) => {
        const decimalAPY = apy / 100;  // Convert percentage to decimal
        return Math.pow(1 + decimalAPY, 1/12) - 1;
    };

    const calculateCompoundInterest = (startingAmount, monthlySavings, apy, timePeriod) => {
        let totalSavings = startingAmount;
        const totalMonths = timePeriod * 12;
        const balances = [startingAmount];
        const monthlyRate = getMonthlyRateFromAPY(apy);

        for (let i = 0; i < totalMonths; i++) {
            totalSavings = (totalSavings + monthlySavings) * (1 + monthlyRate);
            if ((i + 1) % 12 === 0) {
                balances.push(totalSavings);
            }
        }
        return { totalSavings, balances };
    };

    const calculateStockReturns = (startingAmount, monthlySavings, annualReturn, timePeriod) => {
        let totalSavings = startingAmount;
        const totalMonths = timePeriod * 12;
        const balances = [startingAmount];
        const monthlyRate = (annualReturn / 100) / 12;  // Convert percentage to decimal and then to monthly

        for (let i = 0; i < totalMonths; i++) {
            totalSavings = (totalSavings + monthlySavings) * (1 + monthlyRate);
            if ((i + 1) % 12 === 0) {
                balances.push(totalSavings);
            }
        }
        return { totalSavings, balances };
    };

    const calculateSavings = ({ startingAmount, monthlySavings, interestRate, timePeriod, investmentType }) => {
        let result;

        switch (investmentType) {
            case 'stocks':
                result = calculateStockReturns(startingAmount, monthlySavings, interestRate, timePeriod);
                break;
            default: // 'compound'
                result = calculateCompoundInterest(startingAmount, monthlySavings, interestRate, timePeriod);
        }

        const { totalSavings, balances } = result;
        const totalContributions = startingAmount + (monthlySavings * timePeriod * 12);
        const interestEarned = totalSavings - totalContributions;
        const returnMultiple = (totalSavings / totalContributions).toFixed(2);

        setResults({
            totalSavings: totalSavings.toFixed(2),
            totalContributions: totalContributions.toFixed(2),
            interestEarned: interestEarned.toFixed(2),
            returnMultiple: returnMultiple
        });

        const labels = Array.from({ length: balances.length }, (_, i) => `Year ${i}`);
        setChartData({
            labels,
            datasets: [{
                label: "Savings Over Time",
                data: balances,
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.4,
            }],
        });
    };

    return (
        <div className="calculator-container">
            <Form onCalculate={calculateSavings} />
            <Results results={results} />
            {chartData && <Chart data={chartData} />}
        </div>
    );
}

export default GrowthSim;