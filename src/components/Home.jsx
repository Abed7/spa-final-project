import "./Home.css";
import SchnelleRezepte from "./SchnelleRezepte.jsx";
import MonthlyCard from "./MonthlyCard.jsx";
import SubscribeBox from "./SubscribeBox.jsx";

const Home = () => {
  return (

    <main className="Home">
      <MonthlyCard />
      <SchnelleRezepte />
      <SubscribeBox />

  );
};

export default Home;
