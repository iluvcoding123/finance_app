import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar({ toggleTheme }) {
    return (
        <nav className="navbar">
            <div className="menu-icon">
                <img
                    src={`${process.env.PUBLIC_URL}/MenuButton.png`}
                    alt="Menu Button"
                    className="menu-button-icon"
                />
                <Dropdown />
            </div>
            <div className="navbar-title-container">
                <Link to="/" className="navbar-title">
                    doji365
                </Link>
            </div>
            <div className="theme-toggle" onClick={toggleTheme}>
                <img
                    src={`${process.env.PUBLIC_URL}/ThemeToggleButton.png`}
                    alt="Theme Toggle"
                    className="theme-toggle-icon"
                />
            </div>
        </nav>
    );
}

export default Navbar;