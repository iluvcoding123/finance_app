import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);
    const [newAsset, setNewAsset] = useState({
        symbol: '',
        shares: '',
        price: '',
        type: 'stock'  // stock, crypto, etf, etc.
    });

    const handleAddAsset = (e) => {
        e.preventDefault();
        if (newAsset.symbol && newAsset.shares && newAsset.price) {
            setPortfolio([...portfolio, {
                ...newAsset,
                id: Date.now(),
                value: Number(newAsset.shares) * Number(newAsset.price)
            }]);
            // Reset form
            setNewAsset({
                symbol: '',
                shares: '',
                price: '',
                type: 'stock'
            });
        }
    };

    return (
        <div className="portfolio-container">
            <h1>Portfolio Creator</h1>
            
            <form onSubmit={handleAddAsset} className="asset-form">
                <div className="form-group">
                    <label>Asset Type</label>
                    <select
                        value={newAsset.type}
                        onChange={(e) => setNewAsset({...newAsset, type: e.target.value})}
                    >
                        <option value="stock">Stock</option>
                        <option value="etf">ETF</option>
                        <option value="crypto">Cryptocurrency</option>
                        <option value="bond">Bond</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Symbol</label>
                    <input
                        type="text"
                        value={newAsset.symbol}
                        onChange={(e) => setNewAsset({...newAsset, symbol: e.target.value.toUpperCase()})}
                        placeholder="e.g., AAPL"
                    />
                </div>
                <div className="form-group">
                    <label>Shares/Units</label>
                    <input
                        type="number"
                        value={newAsset.shares}
                        onChange={(e) => setNewAsset({...newAsset, shares: e.target.value})}
                        min="0"
                        step="0.0001"
                    />
                </div>
                <div className="form-group">
                    <label>Price per Share ($)</label>
                    <input
                        type="number"
                        value={newAsset.price}
                        onChange={(e) => setNewAsset({...newAsset, price: e.target.value})}
                        min="0"
                        step="0.01"
                    />
                </div>
                <button type="submit" className="add-asset-btn">Add Asset</button>
            </form>

            <div className="portfolio-summary">
                <h2>Portfolio Summary</h2>
                <div className="portfolio-list">
                    {portfolio.map(asset => (
                        <div key={asset.id} className="portfolio-item">
                            <span className="asset-symbol">{asset.symbol}</span>
                            <span className="asset-type">{asset.type}</span>
                            <span className="asset-shares">{asset.shares} shares</span>
                            <span className="asset-value">${asset.value.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <div className="portfolio-total">
                    <h3>Total Value: ${portfolio.reduce((sum, asset) => sum + asset.value, 0).toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
}

export default Portfolio; 