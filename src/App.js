import "./styles.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Opcenito from "./Components/Opcenito";
import Igraci from "./Components/Igraci";
import Karte from "./Components/Karta";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Opcenito />}></Route>
          <Route path="/Igraci" element={<Igraci />}></Route>
          <Route path="/Danasnja_karta" element={<Karte />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
