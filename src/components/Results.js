import React from "react";
import "./Results.css";

function Results({ results }) {
    if (!results) {
        return null;
    }

    return (
        <div className="results-container">
            <h2>Results</h2>
            <div className="results-grid">
                <div className="label">Total savings</div>
                <div className="colon">:</div>
                <div className="value">${Number(results.totalSavings).toLocaleString()}</div>
                
                <div className="label">Total contributions</div>
                <div className="colon">:</div>
                <div className="value">${Number(results.totalContributions).toLocaleString()}</div>
                
                <div className="label">Interest earned</div>
                <div className="colon">:</div>
                <div className="value">${Number(results.interestEarned).toLocaleString()}</div>
                
                <div className="label">Return multiple</div>
                <div className="colon">:</div>
                <div className="value">{results.returnMultiple}x</div>
            </div>
        </div>
    );
}

export default Results;