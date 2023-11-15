import { useState, useEffect } from "react";
import "./Explore.css";
import { FaSistrix } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Explore = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [nutrition, setNutrition] = useState("meat");
  console.log("useState data:", data);

  // API Keys

  const apiKey = "6068b5348e854d27add8cc069010b8dd";
  const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
  const apiKeyO2 = "08177436caba4cdd8794441ed4da0ef1";
  const apiKeyM2 = "96a4012a907a426391db8efdb8849261";

  // handler functions
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const nutritionHandler = (e) => {
    setNutrition(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const loadHandler = () => {
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKeyO2}
        `);
        const loadedData = await response.json();
        console.log(loadedData.recipe);
        setData([...data, ...loadedData.recipes]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKeyO2}`
        );

        const data = await response.json();
        setData(data.recipes);
        setIsDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (search.length > 2) {
      const fetchData = async () => {
        try {
          const response =
            await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=10&apiKey=${apiKeyO2}&addRecipeInformation=true
          `);
          const data = await response.json();
          // console.log("Data:", data);
          // console.log(response);
          // // save recipe ids in an extra array via map
          // const recipeIds = data.results.map((result) => result.id);

          // const recipeDetailsPromises = recipeIds.map(async (id) => {
          //   const detailResponse = await fetch(
          //     `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKeyO}`
          //   );

          //   const detailData = await detailResponse.json();
          //   console.log(detailData);
          //   return detailData;
          // });

          // const resolvedRecipeDetails = await Promise.all(
          //   recipeDetailsPromises
          // );

          setData(data.results);
          setIsDataLoaded(true);
        } catch (error) {
          console.log("Fatching Data Error:", error);
        }
      };

      fetchData();
    }
  }, [search]);

  return (
    <main className="Explore">
      <section className="stage-explpore"></section>
      <section className="search-filter-wrapper">
        <form onSubmit={submitHandler} className="search-wrapper">
          <input type="text" onChange={searchHandler} value={search}></input>
          <button>
            <FaSistrix />
          </button>
          <div className="filter-wrapper">
            <select
              name="nutrition"
              id="nutrition"
              value={nutrition}
              onChange={nutritionHandler}
            >
              <option value="meat">Meat</option>
              <option value="fish">Fish</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
            <select name="" id="">
              <option value="">Test1</option>
              <option value="">Test1</option>
              <option value="">Test1</option>
              <option value="">Test1</option>
            </select>
            <select name="" id="">
              <option value="">Test1</option>
              <option value="">Test1</option>
              <option value="">Test1</option>
              <option value="">Test1</option>
            </select>
          </div>
        </form>
      </section>
      <section className="search-results">
        {isDataLoaded
          ? data.map((recipe) => {
              return (
                <Link
                  to={`/recipe/`}
                  key={recipe.id}
                  className="recipe-wrapper"
                >
                  <div className="img-wrapper">
                    <img src={recipe.image} alt={recipe.title} />
                    {recipe.vegetarian ? (
                      <div className="recipe-tag">
                        {recipe.vegan ? "vegan" : "vegetarian"}
                      </div>
                    ) : null}
                  </div>
                  <h3>{recipe.title}</h3>
                </Link>
              );
            })
          : "Daten sind am laden"}
      </section>
      <section className="load-wrapper">
        <button onClick={loadHandler}>Load more</button>
      </section>
    </main>
  );
};

export default Explore;
