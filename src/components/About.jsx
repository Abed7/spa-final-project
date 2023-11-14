import { useState, useEffect } from "react";

const About = () => {
  const [data, setData] = useState([]);

  const apiKey = "6068b5348e854d27add8cc069010b8dd";
  const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=30&apiKey=${apiKeyN}
        `);
        const data = await response.json();

        // save recipe ids in an extra array via map
        const recipeIds = data.results.map((result) => result.id);

        const recipeDetailsPromises = recipeIds.map(async (id) => {
          const detailResponse = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKeyN}`
          );
          const detailData = await detailResponse.json();
          return detailData;
        });

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
