import Glava from "./Header";
import Foot from "./Footer";
import "../styles.css";
import "./karta.css";
import qr from "./slikicee/frame.png";
import logoo from "./slikicee/logoo1.jpg";

export default function Danasnja_karta({ Danasnja_karta }) {
  return (
    <div className="Danasnja_karta">
      <Glava />
      <center>
        <div className="karta">
          <div className="header">
            <img
              src={logoo}
              alt="Golden State Warriors Logo"
              className="logo"
            />
            <h1 className="naslov">Golden State Warriors</h1>
          </div>

          <table>
            <tr>
              <td className="tekst">Datum: </td>
              <td>{Danasnja_karta.datum}</td>
            </tr>
            <tr>
              <td className="tekst">Vrijeme: </td>
              <td>{Danasnja_karta.vrime}</td>
            </tr>
            <tr>
              <td className="tekst">Stadion: </td>
              <td>{Danasnja_karta.stadion}</td>
            </tr>
            <tr>
              <td className="tekst">Sjedalo: </td>
              <td>{Danasnja_karta.sjedalo}</td>
            </tr>
            <tr>
              <td className="tekst">Ime i Prezime:</td>
              <td>
                <form action="">
                  <input type="text" name="ime" id="ime"></input>
                </form>
              </td>
            </tr>
          </table>
          <div className="footer">
            <img src={qr} alt="qr" id="qr"></img>
          </div>
        </div>
      </center>
      <Foot />
    </div>
  );
}
