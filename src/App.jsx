import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    const apiKey = "6068b5348e854d27add8cc069010b8dd";
    const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
    const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKeyO}&number=30`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results[0].image);
        console.log(json);
        // console.log(json.results[0]);
        setData(json);
      });
  }, []);

  return (
    <>
      <Navbar />
      {/* {data.map((recipe) => (
        <img src={recipe.image} />
      ))} */}

      <Home />
    </>
  );
}

export default App;
