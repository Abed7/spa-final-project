import { useEffect, useRef, useState } from "react";
import "../App.css";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

function App() {
  const [data, setData] = useState({ recipes: [] });

  const [filterdData, setFilteredData] = useState([]);
  const [ inputValue, setInputValue] = useState([]);



  useEffect(() => {
    const apiKey = "6068b5348e854d27add8cc069010b8dd";
    const apiKeyO = "c7250b0a541c49f0ad7cde17c064bb04";
    const apiKeyN = "fcdf6ca97b5c4a468a70e2bbb8bd0bbf";
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKeyO}&number=30`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData({ recipes: json.recipes });
      });
  }, []);
  
const inputRef = useRef();

useEffect(()=>{

  const filter = data.recipes.filter(
    data => data.recipes.title.tolowerCase().includes(inputValue)
  )
  setFilteredData(filter)
},[inputValue])

console.log(recipes.title);
const handleKeyAdd = e => {
    if (e.key === "Enter") {
      console.log(e.key);
      // e.preventDefault();
      // handleAddTodo();
      const title = inputRef.current.value;
      const newItem = { text };
      setFilteredData([...filterdData, newItem]);
      inputRef.current.value = "";
      localStorage.setItem("data", JSON.stringify([...data, newItem]));
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

    </>
  );
}
export default App;
