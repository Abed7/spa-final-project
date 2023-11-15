import "./App.css";
import Carousel from "./components/Carousel.jsx";
import SubscribeBox from "./components/SubscribeBox.jsx";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import SchnelleRezepte from "./components/SchnelleRezepte.jsx";
import MonthlyCard from "./components/MonthlyCard.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Outlet />
      <MonthlyCard />
      <SchnelleRezepte />
      <SubscribeBox />
      <Footer />
    </>
  );
}

export default App;
