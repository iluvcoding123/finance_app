import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
    return (
        <div className="dropdown-menu">
            <Link to="/" className="dropdown-item">Home</Link>
            <Link to="/interestcalculator" className="dropdown-item">Compound Interest Calculator</Link>
            {/* Add more links as needed */}
        </div>
    );
}

export default Dropdown;