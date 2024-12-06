import React from "react";
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
            <h1 className="navbar-title">Home</h1>
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