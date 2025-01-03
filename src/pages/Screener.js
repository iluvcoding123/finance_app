import React, { useState } from 'react';
import axios from 'axios';
import "./Screener.css";

function Screener() {
    const [stockSymbol, setStockSymbol] = useState(''); // User input for stock symbol
    const [stockData, setStockData] = useState(null); // Fetched stock profile data
    const [stockQuote, setStockQuote] = useState(null); // Fetched stock quote data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // For error handling

    const API_KEY = 'ctrmhv9r01qhb16n8qc0ctrmhv9r01qhb16n8qcg'; // Replace with your actual API key

    // Fetch stock data for a given symbol
    async function fetchStockData() {
        setLoading(true);
        setError(null); // Clear previous errors
        try {
            // Fetch profile data
            const profileResponse = await axios.get('https://finnhub.io/api/v1/stock/profile2', {
                params: {
                    symbol: stockSymbol.toUpperCase(), // Ensure uppercase for consistency
                    token: API_KEY,
                },
            });

            if (!profileResponse.data || Object.keys(profileResponse.data).length === 0) {
                setError('Stock not found. Please check the symbol.');
                setStockData(null);
                setStockQuote(null);
            } else {
                setStockData(profileResponse.data); // Set the fetched stock profile data

                // Fetch quote data
                const quoteResponse = await axios.get('https://finnhub.io/api/v1/quote', {
                    params: {
                        symbol: stockSymbol.toUpperCase(),
                        token: API_KEY,
                    },
                });
                setStockQuote(quoteResponse.data); // Set the fetched stock quote data
            }
        } catch (err) {
            console.error('Error fetching stock data:', err);
            setError('Failed to fetch stock data. Please try again.');
            setStockData(null);
            setStockQuote(null);
        }
        setLoading(false);
    }

    // Helper function to format market cap
    function formatMarketCap(marketCap) {
        if (!marketCap) return 'N/A';
        if (marketCap >= 1_000_000) return `${(marketCap / 1_000_000).toFixed(1)}T`; // Trillions
        if (marketCap >= 1_000) return `${(marketCap / 1_000).toFixed(1)}B`; // Billions
        if (marketCap >= 1) return `${marketCap.toFixed(1)}M`; // Millions
        return `${(marketCap * 1_000).toFixed(1)}K`; // Thousands
    }

    return (
        <div className="screener-container">
            <h1>Stock Screener</h1>
            <div className="search-container">
                <label htmlFor="stockSymbol">Search for a Stock:</label>
                <input
                    type="text"
                    id="stockSymbol"
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                    placeholder="Enter stock symbol (e.g., AAPL)"
                />
                <button onClick={fetchStockData} disabled={!stockSymbol.trim()}>
                    Search
                </button>
            </div>
            {/* Only display results when necessary */}
            {loading || error || stockData ? (
                <div className="results-container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="error">{error}</p>
                    ) : stockData ? (
                        <div>
                            {/* Company Logo */}
                            {stockData.logo && (
                                <img
                                    src={stockData.logo}
                                    alt={`${stockData.name} Logo`}
                                    className="company-logo"
                                />
                            )}
                            <h2>{stockData.name || stockData.ticker}</h2>
                            <p><strong>Symbol:</strong> {stockData.ticker}</p>
                            <p><strong>Current Price:</strong> {stockQuote?.c ? `$${stockQuote.c.toFixed(2)}` : 'N/A'}</p>
                            <p><strong>Market Cap:</strong> {formatMarketCap(stockData.marketCapitalization)}</p>
                            <p><strong>Industry:</strong> {stockData.finnhubIndustry}</p>
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}

export default Screener;