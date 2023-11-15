import { useEffect, useRef, useState } from "react";
import "../App.css";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const localCache = {};
function App() {
  const [data, setData] = useState({ recipes: [] });
  // const [recipeList, setRecipeList] = useState([]);
  // const [status, setStatus] = useState('unloaded');
  // const [storedData, setStoredData] = useState([]);

  const [filterdData, setFilteredData] = useState([]);
  const [ inputValue, setInputValue] = useState([]);

  // useEffect(() => {
  //   const apiKey = "6068b5348e854d27add8cc069010b8dd";
  //   const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
  //   const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";

  //   if(!data){
  //       setRecipeList([]);
  //       setStatus('unloaded');
  //   }else if(localCache[data] && Date.now() - localCache[data].timestamp < 30 * 1000
  //   ){
  //       setData(data)
  //       setRecipeList(localCache[recipeList]);
  //       setStatus('loaded');
  //       localStorage.setItem("data", JSON.stringify([...data]));

  //   }else{
  //       setStatus('loading');
  //       const requestRecipeList = async () => {
  //           try {
  //             const response = await fetch(
  //               `https://api.spoonacular.com/recipes/random?apiKey=${apiKeyO}&number=30`
  //             );
  //             const data = await response.json();
  //             setStatus('loaded');
  //             setRecipeList(data.recipes);
  //             localCache[data] = data.recipes;
  //             localCache[data].timestamp = Date.now();
  //           } catch (error) {
  //             console.log(error);
  //           }
  //         };
  //         // Zeitverzögerung zur Demo von loading-Status
  //         setTimeout(() => {
  //           requestRecipeList();
  //         }, 3000);
  //       }
  //     }, [data]);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("data"));
  //   if (storedData) setStoredData(storedData);
  // }, []);

  //   const fetchData = {
  //       unloaded: null,
  //       loading: <div>🌀</div>,
  //       loaded: (
  //         <ul>
  //           {data.recipes.map((recipe) => (
  //             <li key={recipe.id}>
  //               <h2>{recipe.titel}</h2>
  //               <div>
  //                 <img
  //                   src={recipe.image}
  //                   alt={`Thumbnail from ${recipe.titel}`}
  //                 />
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //       ),
  //     };

  useEffect(() => {
    const apiKey = "6068b5348e854d27add8cc069010b8dd";
    const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
    const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKeyO}&number=30`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results[0].image);
        console.log(json);
        // console.log(json.results[0]);
        setData({ recipes: json.recipes });
      });
    //   const storedData = JSON.parse(localStorage.getItem("data"));
    // if (storedData) setData(storedData);
  }, []);

//   useEffect(()=>{
//     localStorage.setItem('data', JSON.stringify(data));
// }, [data])

// useEffect(()=>{
//   setStoredData(JSON.parse(localStorage.getItem("data"))) ;
//     if (storedData) setData(storedData);
// },[])
  
const inputRef = useRef();

useEffect(()=>{
  const filter = data.recipes.filter(
    dataFilter => dataFilter.recipes.title.tolowerCase().includes(inputValue)
  )
  setFilteredData(filter)
},[inputValue])

const handleKeyAdd = e => {
  if (e.key === "Enter") {
    console.log(e.key);
    // e.preventDefault();
    // handleAddTodo();
    const text = inputRef.current.value;
    // const newItem = { completed: false, text };
    
    inputRef.current.value = "";
    // localStorage.setItem("todos", JSON.stringify([...todos, newItem]));
  }
};

  return (
    <>
      <Navbar />
      <input type="text" ref={inputRef}
          onKeyDown={handleKeyAdd} className="search" onInput={e=>setInputValue(e.target.value)}/>
      
      {data.recipes.map((recipe) => (
        <>
          <img key={recipe.id} src={recipe.image} alt={recipe.title} />
          <h2 >{recipe.title}</h2>
        </>
      ))}
      {/* {filterdData.recipes.map((recipe) => (
        <>
          <img key={recipe.id} src={recipe.image} alt={recipe.title} />
          <h2 >{recipe.title}</h2>
        </>
      ))} */}
      <Home />

      {/* {fetchData[status]} */}
    </>
  );
}
export default App;
