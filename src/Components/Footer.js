import "../styles.css";
import "./footer.css";
import teren from "./slikicee/chase.jpg";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="footer">
        <div class="footerr">
          <div class="livo">
            <h3>Golden State Warriors</h3>
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
