import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <div className="logo">
          <img src="../src/assets/Logo.png" alt="" />
          <span>Organick</span>
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
        </ul>
        <div>Icons</div>
      </nav>
    </header>
  );
};

export default Navbar;
