import { useState, useEffect } from "react";
import "./Carousel.css";
import Carousel1 from "../assets/Carousel1.jpg";
import Carousel2 from "../assets/Carousel2.jpg";
import Carousel3 from "../assets/Carousel3.jpg";
import Carousel4 from "../assets/Carousel4.jpg";
import Carousel5 from "../assets/Carousel5.jpg";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    // bei manueller Navigation
    return () => clearInterval(intervalId);
  }, [index, images.length]);

  return (
    <div className="container">
      <div className="prev" onClick={handlePrevClick}>
        <div className="arrow-left"></div>
      </div>
      <ul className="slider">
        {images.map((image, i) => (
          <li key={i} className={i === index ? "visible" : ""}>
            <img src={image} alt={`Bild-Carousel${i + 1}`} />
          </li>
        ))}
      </ul>
      <div className="next" onClick={handleNextClick}>
        <div className="arrow-right"></div>
      </div>
    </div>
  );
};

export default Carousel;
