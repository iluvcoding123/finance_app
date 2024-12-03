import React from "react";
import { Link } from "react-router-dom";

function PageButtons() {
    return (
        <div className="page-buttons">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/interestcalculator">
                <button>Compound Interest Calculator</button>
            </Link>
        </div>
    );
}

export default PageButtons;