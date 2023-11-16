/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SearchResults.css";
import noresults from "../assets/no_results.gif";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useAuth } from "./Auth";
import { useOutletContext } from "react-router-dom";

const RecipeCard = ({ data, isDataLoaded, noResults }) => {
  const auth = useAuth();
  const { saveRecipe, setSaveRecipe } = useOutletContext();
  console.log("SaveRecipe from Search", saveRecipe);

  const heartHandler = (title, id) => {
    // [] => [{title, id}, {title, id}]

    // gibt es ein Objekt mit der selben ID in saveRecipe?

    if (saveRecipe.length === 0) {
      const newRecipes = [...saveRecipe, { title, id }];
      setSaveRecipe([newRecipes]);
      setSaveRecipe(newRecipes);
      localStorage.setItem("saveItems", JSON.stringify(newRecipes));
    }

    let checkArray = [];
    checkArray = saveRecipe.map((recipe) => (recipe.id === id ? false : true));

    console.log("checkArray", checkArray);

    let newRecipes;
    if (!checkArray.includes(false)) {
      newRecipes = [...saveRecipe, { title, id }];

      setSaveRecipe(newRecipes);
      localStorage.setItem("saveItems", JSON.stringify(newRecipes));
    }
  };

  let uxRender;
  console.log("noResults", noResults);
  if (noResults) {
    uxRender = (
      <div className="noresults">
        <h2>No results with your search settings</h2>
        <img src={noresults} alt="" />
      </div>
    );
  } else {
    uxRender = "Data is loading";
  }
  return (
    <section className="SearchResults">
      {isDataLoaded
        ? data.map((recipe) => {
            return (
              <div key={recipe.id} className="RecipeCard">
                <Link to={`/recipe/${recipe.id}`} className="recipe-wrapper">
                  <div className="img-wrapper">
                    <img src={recipe.image} alt={recipe.title} />
                    {recipe.vegetarian ? (
                      <div className="recipe-tags">
                        <div className="recipe-tag">
                          {recipe.vegan ? "vegan" : "vegetarian"}
                        </div>
                        <div className="recipe-time"></div>
                      </div>
                    ) : null}
                  </div>
                  <div className="img-overlay">
                    <div className="overlay-content">
                      <h3>{recipe.title}</h3>
                    </div>
                  </div>
                  <div className="recipe-minutes">
                    <span>
                      {recipe.readyInMinutes}
                      <br />
                      min
                    </span>
                  </div>
                </Link>
                {auth.user && (
                  <button onClick={() => heartHandler(recipe.title, recipe.id)}>
                    <FaHeartCirclePlus id="heart" />
                  </button>
                )}
              </div>
            );
          })
        : uxRender}
    </section>
  );
};

export default RecipeCard;
