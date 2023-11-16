import DessertCrepes from "../assets/DessertCrepes.jpg";
import DessertTiramisu from "../assets/DessertTiramisu.jpg";
import DessertMuffin from "../assets/DessertMuffin.jpg";

import clockIcon from "../assets/clock-icon.svg";

import "./SchonProbiert.css";
import { Link } from "react-router-dom";

// Lokale Daten für die Cards -> beim klick drauf verlinkt API auf Rezept Card
// Mehr anzeigen Zeigt Rezept Cards mit dauer unter 30min Zubereitungszeit

const Dessert = () => {
  return (
    <section className="SchonProbiert">
      <div className="rezept-separator"> </div>
      <div className="rezept-container">
        <h2>Desserts</h2>

        <div className="rezept-box">
          <div className="rezept-card">
            <Link to={`/recipe/${`643972`}`}>
              <div className="rezept-img">
                <img src={DessertCrepes} alt="Bild Crepes" />
              </div>
            </Link>
            <div className="rezept-botom">
              <h3>Früchte Crepes</h3>

              <p>
                Crêpes sollen herrlich weich sein, nicht zäh und nicht mehlig
                mit diesem Rezept kriegst du die Spezialität aus Frankreich
                perfekt hin!
              </p>
              <p className="rezept-time">
                <img className="clock" src={clockIcon} alt="clock Icon" /> 20min
              </p>
            </div>
          </div>
          <div className="rezept-card">
            <Link to={`/recipe/${`642614`}`}>
              <div className="rezept-img">
                <img src={DessertTiramisu} alt="Bild Suppe" />
              </div>
            </Link>
            <div className="rezept-botom">
              <h3>Tiramisu</h3>
              <p>
                Das italienische Dessert Tiramisu erfreut sich überall großer
                Beliebtheit. So auch bei uns..
              </p>
              <p className="rezept-time">
                <img className="clock" src={clockIcon} alt="clock Icon" /> 45min
              </p>
            </div>
          </div>
          <div className="rezept-card">
            <Link to={`/recipe/${`633202`}`}>
              <div className="rezept-img">
                <img src={DessertMuffin} alt="Bild Salat" />
              </div>
            </Link>
            <div className="rezept-botom">
              <h3>Schnelle Muffins</h3>
              <p>Herbstliche Beerenmuffins, schnell und einfach Zubereitet.</p>
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

export default Dessert;
