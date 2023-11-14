import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <NavLink to="/">
          <div className="logo">
            <img src="../src/assets/Logo.png" alt="" />
            <span>Organick</span>
          </div>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/explore">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/recipe">Recipe</NavLink>
          </li>
        </ul>
        <div>Icons</div>
      </nav>
    </header>
  );
};

export default Navbar;
