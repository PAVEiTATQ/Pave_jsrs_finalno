import "../styles.css";
import Danas from "./Danasnja_karta";

export default function Karta() {
  let karta = {
    datum: "6.6.2023",
    vrime: "14:00",
    stadion: "Chase Center",
    sjedalo: "Sekcija 100, Red 7, Sjedalo 12"
  };

  return (
    <div className="Karta">
      <Danas Danasnja_karta={karta} />
    </div>
  );
}
