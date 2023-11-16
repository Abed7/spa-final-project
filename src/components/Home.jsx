import "./Home.css";
import SchnelleRezepte from "./SchnelleRezepte.jsx";
import MonthlyCard from "./MonthlyCard.jsx";
import SubscribeBox from "./SubscribeBox.jsx";
import FoodJoke from "./FoodJoke.jsx";
import SchonProbiert from "./SchonProbiert.jsx";
import Dessert from "./Dessert.jsx";

const Home = () => {
  return (
    <main className="Home">
      <SchonProbiert />
      <SchnelleRezepte />
      <Dessert />
      <MonthlyCard />
      <FoodJoke />
      <SubscribeBox />
    </main>
  );
};

export default Home;
