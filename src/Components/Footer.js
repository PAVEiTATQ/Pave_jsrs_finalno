import "../styles.css";
import "./footer.css";
import teren from "./slikicee/chase.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="footer">
        <div class="footerr">
          <div class="livo">
            <h3>Golden State Warriors</h3>
            <p>©Copyright - Pave Petar Vitaljić</p>
            <a
              href="https://www.instagram.com/warriors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div class="desno">
            <img src={teren} alt="teren"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
