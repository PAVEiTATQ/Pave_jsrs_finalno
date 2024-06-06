import "./styles.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Opcenito from "./Components/Opcenito";
import Igraci from "./Components/Igraci";
import Karte from "./Components/Karta";
import Tema from "./Components/Tema";
import React, { useState, useEffect } from "react";

export default function App() {
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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Opcenito />}></Route>
          <Route path="/Igraci" element={<Igraci />}></Route>
          <Route path="/Danasnja_karta" element={<Karte />}></Route>
          <Route path="/Tema" element={<Tema />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
