import "./Home.css";
import SchnelleRezepte from "./SchnelleRezepte.jsx";
import MonthlyCard from "./MonthlyCard.jsx";
import SubscribeBox from "./SubscribeBox.jsx";
import FoodJoke from "./FoodJoke.jsx";

const Home = () => {
  return (
    <main className="Home">
      <FoodJoke />
      <MonthlyCard />
      <SchnelleRezepte />
      <SubscribeBox />
    </main>
  );
};

export default Home;
