import { useState } from "react";
import PropTypes from "prop-types";
import Glava from "./Header";
import Foot from "./Footer";
import "../styles.css";
import "./karta.css";
import qr from "./slikicee/frame.png";
import logoo from "./slikicee/logoo1.jpg";

const counter = useRef(0);
const [counter2, setCounter] = useState(0);
useEffect(() => {
  counter.current = counter.current + 1;
  setCounter((counter2) => counter2 + 1);
}, [output]);
useEffect(() => {
  counter.current = 0;
  setCounter(0);
}, []);

const Broj_sjedala = () => {
  return Math.floor(Math.random() * 18064) + 1;
};

const brojac = 0;

export default function Danasnja_karta({ Danasnja_karta }) {
  const [karta, postaviKartu] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const novaKarta = {
      datum: Danasnja_karta.datum,
      vrime: Danasnja_karta.vrime,
      stadion: Danasnja_karta.stadion,
      sjedalo: Broj_sjedala(),
      ime: formData.get("ime"),
    };
    postaviKartu((proslaKarta) => [...proslaKarta, novaKarta]);
    event.target.reset();
  };

  return (
    <div className="Danasnja_karta">
      <Glava />
      <center>
        <h2>Broj kupljenih karata: {counter.current}</h2>
        <form onSubmit={handleSubmit}>
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
              <tbody>
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
                  <td>{Broj_sjedala()}</td>
                </tr>
                <tr>
                  <td className="tekst">Ime i Prezime:</td>
                  <td>
                    <input type="text" name="ime" id="ime" required></input>
                  </td>
                </tr>
              </tbody>
              <button type="submit">Kupi</button>
            </table>
            <div className="footer">
              <img src={qr} alt="QR Code" id="qr"></img>
            </div>
          </div>
        </form>
        {karta.map((karta, index) => (
          <div className="karta" key={index}>
            <div className="header">
              <img
                src={logoo}
                alt="Golden State Warriors Logo"
                className="logo"
              />
              <h1 className="naslov">Golden State Warriors</h1>
            </div>
            <table>
              <tbody>
                <tr>
                  <td className="tekst">Datum: </td>
                  <td>{karta.datum}</td>
                </tr>
                <tr>
                  <td className="tekst">Vrijeme: </td>
                  <td>{karta.vrime}</td>
                </tr>
                <tr>
                  <td className="tekst">Stadion: </td>
                  <td>{karta.stadion}</td>
                </tr>
                <tr>
                  <td className="tekst">Sjedalo: </td>
                  <td>{Broj_sjedala()}</td>
                </tr>
                <tr>
                  <td className="tekst">Ime i Prezime:</td>
                  <td>{karta.ime}</td>
                </tr>
              </tbody>
            </table>
            <div className="footer">
              <img src={qr} alt="QR Code" id="qr"></img>
            </div>
          </div>
        ))}
      </center>
      <Foot />
    </div>
  );
}
