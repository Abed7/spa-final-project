import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
import { FaHeartCirclePlus } from "react-icons/fa6";

const Navbar = () => {
  const auth = useAuth();
  console.log(auth);
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

          {/* <li>{auth.user || <NavLink to="/profile">{auth.logout}</NavLink>}</li> */}
        </ul>
        <ul>
          <li>
            {auth.user && (
              <NavLink to="/savelist">
                <FaHeartCirclePlus id="heart" />
              </NavLink>
            )}
          </li>
          {/* <li>
            {" "}
            <NavLink to="/profile">Profile</NavLink>
          </li> */}

          <li>{!auth.user && <NavLink to="/login">Login</NavLink>}</li>
          {auth.user && (
            <li>
              <NavLink to="/profile">{auth.user}</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
