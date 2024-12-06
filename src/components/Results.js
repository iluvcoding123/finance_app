import React from "react";
import "./Results.css";

function Results({ results }) {
    if (!results) {
        return null; // Don't render anything if there are no results
    }

    return (
        <div className="results-container">
            <h2>Results</h2>
            <p>Total savings: <strong>${Number(results.totalSavings).toLocaleString()}</strong></p>
            <p>Interest earned: <strong>${Number(results.interestEarned).toLocaleString()}</strong></p>
        </div>
    );
}

export default Results;