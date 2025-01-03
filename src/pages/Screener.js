import React, { useState } from 'react';
import "./Screener.css";

function Screener() {
    // State for filters
    const [filters, setFilters] = useState({
        marketCap: '', // Initial market cap filter is "Any"
    });

    // Dummy stock data
    const stocks = [
        { name: 'Apple', marketCap: 'mega' },
        { name: 'Microsoft', marketCap: 'mega' },
        { name: 'Tesla', marketCap: 'large' },
        { name: 'Nvidia', marketCap: 'large' },
        { name: 'Shopify', marketCap: 'mid' },
        { name: 'Zoom', marketCap: 'mid' },
        { name: 'Roku', marketCap: 'small' },
        { name: 'Etsy', marketCap: 'small' },
    ];

    // Filter stocks based on selected market cap
    const filteredStocks = stocks.filter(stock => {
        return filters.marketCap === '' || stock.marketCap === filters.marketCap;
    });

    return (
        <div className="screener-container">
            <h1>Stock Screener</h1>
            <div className="filters-container">
                <label htmlFor="marketCap">Market Cap:</label>
                <select
                    id="marketCap"
                    value={filters.marketCap}
                    onChange={(e) => setFilters({ ...filters, marketCap: e.target.value })}
                >
                    <option value="">Any</option>
                    <option value="mega">Mega Cap ($200B+)</option>
                    <option value="large">Large Cap ($10B-$200B)</option>
                    <option value="mid">Mid Cap ($2B-$10B)</option>
                    <option value="small">Small Cap ($300M-$2B)</option>
                </select>
            </div>
            <div className="results-container">
                <h2>Results:</h2>
                {filteredStocks.length > 0 ? (
                    <ul>
                        {filteredStocks.map((stock) => (
                            <li key={stock.name}>
                                {stock.name} - Market Cap: {stock.marketCap.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
}

export default Screener;