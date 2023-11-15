import "./App.css";
import Carousel from "./components/Carousel.jsx";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
