import Cookie from "../assets/Cookie.jpg";
// import KeksIcon from "../assets/cookie-icon.svg";

import "./MonthlyCard.css";
import { Link } from "react-router-dom";
const MonthlyCard = () => {
  return (
    <section className="MonthlyCard">
      <div className="rezept-separator"> </div>
      <div className="monthly-container">
        <div className="monthly-box">
          <div className="monthly-header">
            <h3>Rezept des Monats</h3>
          </div>
          <div className="monthly-body">
            <div className="left">
              <h4>Nussmakronen</h4>
              <img src={Cookie} alt="bild von Keksen" />
            </div>
            <div className="right">
              <p>
                Die Plätzchen-Back-Saison hat begonnen! Eines unserer
                Lieblings-Plätzchen: Nussmakronen! Sie sind super einfach und
                schnell gebacken.
              </p>
              <Link to={`/recipe/${`639798`}`}>Hier Klicken</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCard;
