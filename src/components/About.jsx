import { useState, useEffect } from "react";

const About = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const apiKey = "6068b5348e854d27add8cc069010b8dd";
  const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";

  useEffect(() => {
    //  654857

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=30&apiKey=${apiKeyN}
      `
    )
      // fetch(
      //   `https://api.spoonacular.com/recipes/${654857}/information?apiKey=${apiKeyN}
      //     `
      // )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results[0].image);
        console.log(json);

        setData(json.results);
        setIsDataLoaded(true);
      });
  }, []);

  let detailArray = [];
  if (isDataLoaded) {
    console.log("Data is loaded");
    for (let i = 0; i < 2; i++) {
      fetch(
        `https://api.spoonacular.com/recipes/${data[i].id}/information?apiKey=${apiKeyN}`
      )
        .then((response) => response.json())
        .then((detailRecipe) => {
          detailArray.push(detailRecipe);
        });
      console.log("DetailRezepte", detailArray);
    }
  }

  // let detailArray = [];
  // if (isDataLoaded) {
  //   detailArray = data.map((recipe) => {
  //     fetch(
  //       `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKeyN}
  //       `
  //     )
  //       .then((response) => response.json())
  //       .then((jsonDetail) => {
  //         console.log(jsonDetail);
  //       });
  //   });
  // }

  return (
    <>
      <h1>About</h1>
    </>
  );
};

export default About;
