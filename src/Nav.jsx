import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav(props) {
    return (
        <header className="nav-bar">
            <button className="exit-button" onClick={props.restartGame}>Exit quiz</button>
            <h1>QuizzInator</h1>
            <ThemeToggle />
        </header>
    )
}