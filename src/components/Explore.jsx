import { useState, useEffect } from "react";
import "./Explore.css";
import { FaSistrix } from "react-icons/fa6";

const Explore = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    const apiKey = "6068b5348e854d27add8cc069010b8dd";
    const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
    const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=meat&maxFat=25&number=1&apiKey=${apiKey}
        `);
        const data = await response.json();
        console.log(response);
        // save recipe ids in an extra array via map
        const recipeIds = data.results.map((result) => result.id);

        const recipeDetailsPromises = recipeIds.map(async (id) => {
          const detailResponse = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
          );
          console.log(recipeDetailsPromises);
          const detailData = await detailResponse.json();
          return detailData;
        });

        const resolvedRecipeDetails = await Promise.all(recipeDetailsPromises);

        setData(resolvedRecipeDetails);
        setIsDataLoaded(true);
      } catch (error) {
        console.log("Fatching Data Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="Explore">
      <section className="stage-explpore"></section>
      <section className="search-filter-wrapper">
        <form onSubmit={submitHandler} className="search-wrapper">
          <input type="text" onChange={searchHandler} value={search}></input>
          <button>
            <FaSistrix />
          </button>
        </form>
      </section>
      <section className="search-results">
        {isDataLoaded
          ? data.map((recipe) => {
              return (
                <div key={recipe.id} className="recipe-wrapper">
                  <div className="img-wrapper">
                    <img src={recipe.image} alt={recipe.title} />
                    {recipe.vegetarian ? (
                      <div className="recipe-tag">
                        {recipe.vegan ? "vegan" : "vegetarian"}
                      </div>
                    ) : null}
                  </div>
                  <h3>{recipe.title}</h3>
                </div>
              );
            })
          : "Daten sind am laden"}
      </section>
    </main>
  );
};

export default Explore;
