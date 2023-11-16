import { useState, useEffect } from "react";
import "./Explore.css";
import { FaSistrix } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import SearchResults from "./SearchResults";

const Explore = () => {
  const { data, setData } = useOutletContext();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [search, setSearch] = useState("");
  const [nutrition, setNutrition] = useState("meat");
  const [cusine, setCusine] = useState("");
  const [type, setType] = useState("");

  // API Keys

  const apiKey = "6068b5348e854d27add8cc069010b8dd";
  const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
  const apiKeyO2 = "08177436caba4cdd8794441ed4da0ef1";
  const apiKeyM2 = "96a4012a907a426391db8efdb8849261";
  const apiKeyT2 = "a7ca6efa240348bab5906a62a85f6030";
  const apiKeyT3 = "aefba775211b4fa4971e90a23cc58876";

  // handler functions
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const cusineHandler = (e) => {
    setCusine(e.target.value);
  };

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const loadHandler = () => {
    let fetchUrl = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKeyO}`;

    if (search.trim() !== "" || cusine !== "") {
      fetchUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=10&apiKey=${apiKeyO}`;

      if (search.trim() !== "") {
        fetchUrl += `&query=${search}`;
      }
      if (cusine !== "") {
        fetchUrl += `&cuisine=${cusine}`;
      }
      if (type !== "") {
        fetchUrl += `&type=${type}`;
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const loadedData = await response.json();
        console.log(loadedData.recipe);
        if (loadedData.recipes === undefined) {
          setData([...data, ...loadedData.results]);
        } else {
          setData([...data, ...loadedData.recipes]);
        }
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
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKeyO}&cuisine=mexican`
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
    let fetchUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=10&apiKey=${apiKeyO}`;

    if (search.trim() !== "") {
      fetchUrl += `&query=${search}`;
    }
    if (cusine !== "") {
      fetchUrl += `&cuisine=${cusine}`;
    }
    if (type !== "") {
      fetchUrl += `&type=${type}`;
    }

    console.log(fetchUrl);
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
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

        if (data.results.length === 0) {
          console.log("KEINE SUCHERGEBNISSE");
          setNoResults(true);
          setIsDataLoaded(false);
        } else {
          console.log("VORHANDEN");
          setNoResults(false);
          setIsDataLoaded(true);
        }

        setData(data.results);

        console.log("I FETCHED NEW DATA");
      } catch (error) {
        console.log("Fatching Data Error:", error);
      }
    };

    fetchData();
    // }
  }, [search, cusine, type]);

  return (
    <main className="Explore">
      <section className="search-filter-wrapper">
        <form onSubmit={submitHandler} className="search-wrapper">
          <input type="text" onChange={searchHandler} value={search}></input>
          <button>
            <FaSistrix />
          </button>
          <div className="filter-wrapper">
            <div className="select-cusine">
              <select
                name="cusine"
                id="cusine"
                onChange={cusineHandler}
                value={cusine}
              >
                <option value="">Cuisines</option>
                <option value="asian">Asian</option>
                <option value="german">German</option>
                <option value="greek">Greek</option>
                <option value="spanish">Spanish</option>
              </select>
              <select name="type" id="type" onChange={typeHandler} value={type}>
                <option value="">Type</option>
                <option value="soup">Soup</option>
                <option value="salad">Salad</option>
                <option value="drink">Drink</option>
                <option value="bread">Bread</option>
              </select>
            </div>
          </div>
        </form>
      </section>
      <SearchResults
        data={data}
        isDataLoaded={isDataLoaded}
        noResults={noResults}
      />
      <section className="load-wrapper">
        <button onClick={loadHandler}>Load more</button>
      </section>
    </main>
  );
};

export default Explore;
