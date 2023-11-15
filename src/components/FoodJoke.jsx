import { useState } from "react";
import "./FoodJoke.css";

const FoodJoke = () => {
  const [joke, setJoke] = useState("");

  // API KEY
  const apiKeyM2 = "96a4012a907a426391db8efdb8849261";

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKeyM2}`
      );
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Fehler beim Fetchen des Food Jokes:", error);
    }
  };

  const handleClick = () => {
    fetchJoke();
  };

  return (
    <section className="FoodJoke">
      <div className="quote-wrapper">
        <blockquote className="text">
          <p>{joke.text}</p>
          <footer>Spoonacular Api</footer>
        </blockquote>
        <button onClick={handleClick}>Generate Food Fact</button>
      </div>
    </section>
  );
};

export default FoodJoke;
