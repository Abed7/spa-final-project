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
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKeyO}&number=30`
    )
      // fetch(
      //   `https://api.spoonacular.com/recipes/search?query=burger?apiKey=${apiKey}&number=30`
      // )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results[0].image);

        // console.log(json.results[0]);
        setData(json.recipes);
        setIsDataLoaded(true);
      });
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
