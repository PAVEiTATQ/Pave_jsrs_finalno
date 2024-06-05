import Glava from "./Header";
import React, { useState, useEffect } from "react";
import "./Tema.css";

function Tema() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="Tema">
      <Glava />
      <header className="Tema-header">
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleDarkMode}>
          Toggle to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
    </div>
  );
}

export default Tema;
