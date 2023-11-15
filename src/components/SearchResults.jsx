/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SearchResults.css";

const RecipeCard = ({ data, isDataLoaded }) => {
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
              </div>
            );
          })
        : "Daten sind am laden"}
    </section>
  );
};

export default RecipeCard;
