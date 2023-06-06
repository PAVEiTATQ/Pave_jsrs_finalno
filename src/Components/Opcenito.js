import Glava from "./Header";
import Foot from "./Footer";
import "../styles.css";
import "./sve.css";
import most from "./slikicee/mostic.jpg";
import slikica from "./slikicee/warriorsi.jpg";

export default function Opcenito() {
  return (
    <div className="Opcenito">
      <Glava />
      <div class="pocetna">
        <div class="livo1">
          <h1>Golden State Warriors</h1>
          <p>
            Golden State Warriors su profesionalna košarkaška momčad sa
            sjedištem u San Franciscu, Kalifornija. Oni su članovi Zapadne
            konferencije NBA lige. Warriorsi su jedan od najuspješnijih timova u
            povijesti NBA-a, s bogatom tradicijom i ogromnom bazom obožavatelja
            diljem svijeta.
          </p>
          <button>
            <a href="#opcenito">Saznaj više</a>
          </button>
        </div>
        <div class="desno1">
          <img src={slikica} alt="logo"></img>
        </div>
      </div>

      <div class="opcenito" id="opcenito">
        <div class="opcenitoo">
          <div class="livo2">
            <img src={most} alt="mostic"></img>
          </div>
          <div class="desno2">
            <h1>Općenito</h1>
            <p>
              Najveći uspon Warriorsa dogodio se tijekom sezone 2014-2015 kada
              su ostvarili najbolji rekord u povijesti NBA lige od 73 pobjede i
              9 poraza. Taj tim je predvodio trener Steve Kerr, a ključni igrači
              bili su Stephen Curry, Klay Thompson, Draymond Green i Andre
              Iguodala. Warriorsi su osvojili naslov NBA prvaka te sezone, čime
              su prekinuli sušu od 40 godina za franšizu. Nakon te sezone,
              Warriorsi su nastavili dominirati u NBA-u. Uz Curryja, Thompsona i
              Greena, momčad se pojačala dolaskom Kevina Duranta, jednog od
              najboljih igrača u ligi. Warriorsi su osvojili naslov prvaka i u
              sezonama 2016-2017 i 2017-2018, postavši prva momčad koja je
              triput zaredom izborila finale NBA lige od 2000. godine.
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}
