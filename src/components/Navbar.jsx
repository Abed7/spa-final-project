import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
  const auth = useAuth();
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
            <NavLink href="">News</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <li>
            {/* {" "} */}
            <NavLink to="/profile">Profile</NavLink>
          </li>

          <li>{!auth.user && <NavLink to="/login">Login</NavLink>}</li>
        </ul>
        <div>{auth.user}</div>
      </nav>
    </header>
  );
};

export default Navbar;
