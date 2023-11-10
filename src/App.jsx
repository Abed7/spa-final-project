import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiKey = "6068b5348e854d27add8cc069010b8dd";
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results[0].image);
        console.log(json.results);
        // console.log(json.results[0]);
        setData(json.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <img src={data[0].image} alt="" />
      <Home />
    </>
  );
}

export default App;
