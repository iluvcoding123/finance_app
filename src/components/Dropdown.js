import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
    return (
        <div className="dropdown-menu">
            <Link to="/" className="dropdown-item">Home</Link>
            <Link to="/growthsim" className="dropdown-item">Investment Growth Simulator</Link>
            <Link to="/budgeting" className="dropdown-item">Budgeting Tool</Link>
        </div>
    );
}

export default Dropdown;