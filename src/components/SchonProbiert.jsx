import SchonProbiertRisotto from "../assets/SchonProbiertRisotto.jpg";
import SchonProbiertTacos from "../assets/SchonProbiertTacos.jpg";
import SchonProbiertTataki from "../assets/SchonProbiertTataki.jpg";

import clockIcon from "../assets/clock-icon.svg";

import "./SchonProbiert.css";
import { Link } from "react-router-dom";

// Lokale Daten für die Cards -> beim klick drauf verlinkt API auf Rezept Card
// Mehr anzeigen Zeigt Rezept Cards mit dauer unter 30min Zubereitungszeit

const SchonProbiert = () => {
  return (
    <section className="SchonProbiert">
      <div className="rezept-separator"> </div>
      <div className="rezept-container">
        <h2>SchonProbiert</h2>

        <div className="rezept-box">
          <div className="rezept-card">
            <Link to={`/recipe/${`636601`}`}>
              <div className="rezept-img">
                <img src={SchonProbiertRisotto} alt="Bild Pasta" />
              </div>
            </Link>
            <div className="rezept-botom">
              <h3>Kürbis Risotto</h3>

              <p>Butternut Squash Risotto With Pancettan and Sage Oil </p>
              <p className="rezept-time">
                <img className="clock" src={clockIcon} alt="clock Icon" /> 40min
              </p>
            </div>
          </div>
          <div className="rezept-card">
            <Link to={`/recipe/${`656723`}`}>
              <div className="rezept-img">
                <img src={SchonProbiertTacos} alt="Bild Suppe" />
              </div>
            </Link>
            <div className="rezept-botom">
              <h3>Tacos</h3>
              <p>
                Fast-Food-Gericht der mexikanischen Küche, das sich in ganz
                Nord- und Mittelamerika großer Beliebtheit erfreut.{" "}
              </p>
              <p className="rezept-time">
                <img className="clock" src={clockIcon} alt="clock Icon" /> 45min
              </p>
            </div>
          </div>
          <div className="rezept-card">
            <Link to={`/recipe/${`634698`}`}>
              <div className="rezept-img">
                <img src={SchonProbiertTataki} alt="Bild Salat" />
              </div>
            </Link>
            <div className="rezept-botom">
              <h3>Beef Tataki</h3>
              <p>
                Beef Tataki ist ein Gericht aus der japanischen Küche, welches
                sich hervorragend auf dem Grill zubereiten lässt.
              </p>
              <p className="rezept-time">
                <img className="clock" src={clockIcon} alt="clock Icon" /> 45min
              </p>
            </div>
          </div>
        </div>
        <button className="button">Mehr Anzeigen</button>
      </div>
    </section>
  );
};

export default SchonProbiert;
