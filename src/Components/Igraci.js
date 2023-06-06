import Glava from "./Header";
import Foot from "./Footer";
import "../styles.css";
import "./sve.css";
import curry from "./slikicee/curry1.jpg";
import klay from "./slikicee/klay1.jpg";
import green from "./slikicee/green1.jpg";
import pool from "./slikicee/pool1.jpg";
import igoudala from "./slikicee/igoudala1.jpg";
import looney from "./slikicee/looney1.jpg";

export default function Igraci() {
  return (
    <div className="Igraci">
      <Glava />
      <div className="igraci1" id="igraci">
        <div className="igracii1">
          <div class="igrac1">
            <img src={curry} alt="curry"></img>
            <div class="text1">
              <p>Stephen Curry</p>
            </div>
          </div>
          <div class="igrac2">
            <img src={klay} alt="klay"></img>
            <div class="text2">
              <p>Klay Tomphson</p>
            </div>
          </div>
          <div class="igrac3">
            <img src={green} alt="reen"></img>
            <div class="text3">
              <p>Dramond Green</p>
            </div>
          </div>
        </div>
      </div>

      <div className="igraci2" id="igraci">
        <div className="igracii2">
          <div class="igrac4">
            <img src={pool} alt="pool"></img>
            <div class="text4">
              <p>Jordan Pool</p>
            </div>
          </div>
          <div class="igrac5">
            <img src={igoudala} alt="iguodala"></img>
            <div class="text5">
              <p>Andre Iguodala</p>
            </div>
          </div>
          <div class="igrac6">
            <img src={looney} alt="looney"></img>
            <div class="text6">
              <p>Kevon Looney</p>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}
