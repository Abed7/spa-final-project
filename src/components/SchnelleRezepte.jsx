import SchnellRezeptSalat from "../assets/SchnellRezeptSalat.jpg";
import SchnellRezeptSuppe from "../assets//SchnellRezeptSuppe.jpg";
import SchnellRezeptPasta from "../assets//SchnellRezeptPasta.jpg";
import clockIcon from "../assets/clock-icon.svg";

import "./SchnelleRezepte.css";

// Lokale Daten für die Cards -> beim klick drauf verlinkt API auf Rezept Card
// Mehr anzeigen Zeigt Rezept Cards mit dauer unter 30min Zubereitungszeit

const SchnelleRezepte = () => {
  return (
    <section className="SchnelleRezepte">
      <div className="rezept-separator"> </div>
      <div className="rezept-container">
        <h2>SchnelleRezepte</h2>

        <div className="rezept-box">
          <div className="rezept-card">
            <a href="#">
              <div className="rezept-img">
                <img src={SchnellRezeptPasta} alt="Bild Pasta" />
              </div>
            </a>
            <div className="rezept-botom">
              <h3>Spaghetti aglio e olio</h3>

              <p>Bild ist Link - könnte auf API rezept verweisen</p>
              <p>
                <img className="clock" src={clockIcon} alt="clock Icon" /> 25min
              </p>
            </div>
          </div>
          <div className="rezept-card">
            <a href="#">
              <div className="rezept-img">
                <img src={SchnellRezeptSuppe} alt="Bild Suppe" />
              </div>
            </a>
            <div className="rezept-botom">
              <h3>Tomatensuppe</h3>
              <p>Random Information aus Api</p>
              <p>
                <img className="clock" src={clockIcon} alt="clock Icon" /> 20min
              </p>
            </div>
          </div>
          <div className="rezept-card">
            <a href="#">
              <div className="rezept-img">
                <img src={SchnellRezeptSalat} alt="Bild Salat" />
              </div>
            </a>
            <div className="rezept-botom">
              <h3>Frischer Gartensalat</h3>
              <p>Random Information aus Api</p>
              <p>
                <img className="clock" src={clockIcon} alt="clock Icon" /> 16min
              </p>
            </div>
          </div>
        </div>
        <a href="#">Mehr Anzeigen</a>
      </div>
    </section>
  );
};

export default SchnelleRezepte;
