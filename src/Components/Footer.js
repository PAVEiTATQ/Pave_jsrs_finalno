import "../styles.css";
import "./footer.css";
import teren from "./slikicee/chase.jpg";
import ig from "./slikicee/ig.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="footer">
        <div class="footerr">
          <div class="livo">
            <h3>Golden State Warriors</h3>{" "}
            <a
              href="https://www.instagram.com/warriors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" width="30" height="30" />
            </a>
            <p>©Copyright - Pave Petar Vitaljić</p>
          </div>
          <div class="desno">
            <img src={teren} alt="teren"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
