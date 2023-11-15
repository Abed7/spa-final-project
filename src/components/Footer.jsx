import "./Footer.css";
import Icon from "../assets/Icon.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-box footer-box">
        <h3>Contact Us</h3>
        <h4>Email</h4>
        <p>info@organick.com</p>
        <h4>Phone</h4>
        <p>0180666000666</p>
        <h4>Adress</h4>
        <p>88 road, borklyn street, USA</p>
      </div>
      <div className="organick-box footer-box">
        <h3>Organick</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque velit
          repellendus adipisci quo at officiis fugit inventore quis aut et!
        </p>
        <div className="icon-box">
          <a className="icon" href="#">
            <img src={Icon} alt="Icon1" />
          </a>
          <a className="icon" href="#">
            <img src={Icon2} alt="Icon2" />
          </a>
          <a className="icon" href="#">
            <img src={Icon3} alt="Icon3" />
          </a>
          <a className="icon" href="#">
            <img src={Icon4} alt="Icon4" />
          </a>
        </div>
      </div>
      <div className="utility-box footer-box">
        <h3>Utility Pages</h3>
        <a href="#">Style Guide</a>
        <a href="#">404 Not Found</a>
        <a href="#">Login</a>
        <a href="https://spoonacular.com/food-api">API</a>
        <h3>SAP Abschluss Modul</h3>
        <p>Torben</p>
        <p>Munem</p>
        <p>Oli</p>
      </div>
    </div>
  );
};

export default Footer;
