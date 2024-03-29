import React from "react";

export default function ThemeToggle() {

    function toggleTheme() {
        document.body.classList.toggle("dark-mode")
        console.log("i ran")
    }

    return (
        <div className="theme-toggle" onClick={toggleTheme}></div>
    ) 
}