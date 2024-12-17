import React, { useState } from 'react';

function Screener() {
    const [filters, setFilters] = useState({
        marketCap: '',
        sector: '',
        peRatio: '',
        dividend: '',
        price: ''
    });

    return (
        <div className="screener-container">
            <h1>Stock Screener</h1>
            <div className="screener-filters">
                <div className="filter-group">
                    <label>Market Cap</label>
                    <select 
                        value={filters.marketCap}
                        onChange={(e) => setFilters({...filters, marketCap: e.target.value})}
                    >
                        <option value="">Any</option>
                        <option value="mega">Mega ($200B+)</option>
                        <option value="large">Large ($10B-$200B)</option>
                        <option value="mid">Mid ($2B-$10B)</option>
                        <option value="small">Small ($300M-$2B)</option>
                    </select>
                </div>
                {/* More filters will go here */}
            </div>
        </div>
    );
}

export default Screener; 