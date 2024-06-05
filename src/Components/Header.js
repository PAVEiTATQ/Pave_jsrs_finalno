import "../styles.css";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Igraci">
          Igraći
        </Link>
        <Link className="link" to="/Danasnja_karta">
          Karta
        </Link>
        <Link className="link" to="/Tema">
          Tema
        </Link>
      </div>
    </div>
  );
}
