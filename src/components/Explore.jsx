import { useState, useEffect } from "react";
import "./Explore.css";
import { FaSistrix } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "./SearchResults";

const Explore = () => {
  const { data, setData } = useOutletContext();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [nutrition, setNutrition] = useState("meat");
  const [cusine, setCusine] = useState("");
  const apiKey = "6068b5348e854d27add8cc069010b8dd";
  const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
  const apiKeyO2 = "08177436caba4cdd8794441ed4da0ef1";
  const apiKeyM2 = "96a4012a907a426391db8efdb8849261";

  let query = "";
  // let searchUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=10&apiKey=${apiKeyN}${query}${cusine}`;
  let searchUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=10&apiKey=${apiKeyM2}`;

  console.log(searchUrl);

  // API Keys

  // handler functions
  const searchHandler = (e) => {
    query = `&query=${e.target.value}`;
    setSearch(e.target.value);
  };

  const nutritionHandler = (e) => {
    setNutrition(e.target.value);
  };

  const cusineHandler = (e) => {
    const cusineSelect = `&cusine=${e.target.value}`;
    setCusine(cusineSelect);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const loadHandler = () => {
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKeyM2}
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
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKeyM2}&cuisine=mexican`
        );

        const data = await response.json();
        console.log("RANDOM REZEPTE WERDEN GELADEN");
        setData(data.recipes);
        setIsDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // if (search.length >= 0) {
    const fetchData = async () => {
      try {
        const response = await fetch(searchUrl);
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
        console.log(data);
        setData(data.results);
        setIsDataLoaded(true);
        console.log("I FETCHED NEW DATA");
      } catch (error) {
        console.log("Fatching Data Error:", error);
      }
    };

    fetchData();
    // }
  }, [search, cusine]);

  return (
    <main className="Explore">
      <section className="search-filter-wrapper">
        <form onSubmit={submitHandler} className="search-wrapper">
          <input type="text" onChange={searchHandler} value={search}></input>
          <button>
            <FaSistrix />
          </button>
          <div className="filter-wrapper">
            <div className="select-nutrition">
              <label htmlFor="">Nutrition</label>
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
            </div>
            <div className="select-cusine">
              <label htmlFor="cusine">Cusines</label>
              <select
                name="cusine"
                id="cusine"
                onChange={cusineHandler}
                value={cusine}
              >
                <option value="">---</option>
                <option value="asian">Asian</option>
                <option value="german">German</option>
                <option value="greek">Greek</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>

            <select name="" id="">
              <option value="">Test1</option>
              <option value="">Test1</option>
              <option value="">Test1</option>
              <option value="">Test1</option>
            </select>
          </div>
        </form>
      </section>
      <RecipeCard data={data} isDataLoaded={isDataLoaded} />
      <section className="load-wrapper">
        <button onClick={loadHandler}>Load more</button>
      </section>
    </main>
  );
};

export default Explore;
