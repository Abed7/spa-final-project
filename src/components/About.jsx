import { useState, useEffect } from "react";

const About = () => {
  const [data, setData] = useState([]);

  const apiKey = "6068b5348e854d27add8cc069010b8dd";
  const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  const apiKeyM = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
  const apiKeyO2 = "08177436caba4cdd8794441ed4da0ef1";
  const apiKeyM2 = "96a4012a907a426391db8efdb8849261";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=30&apiKey=${apiKeyO2}
        `);
        const data = await response.json();

        // save recipe ids in an extra array via map
        const recipeIds = data.results.map((result) => result.id);

        const recipeDetailsPromises = recipeIds.map(async (id) => {
          const detailResponse = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKeyO2}`
          );
          const detailData = await detailResponse.json();
          return detailData;
        });


    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=30&apiKey=${apiKeyN}
      `
    ).then((response) => response.json())
      .then((json) => {
        // console.log(json.results[0].image);
        console.log(json);
   
        const resolvedRecipeDetails = await Promise.all(recipeDetailsPromises);


        setData(resolvedRecipeDetails);
      } catch (error) {
        console.log("Fatching Data Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h1>About</h1>
    </>
  );
};

export default About;
