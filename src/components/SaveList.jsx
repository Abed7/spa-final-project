/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useEffect, useState } from "react";
import "./SaveList.css";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const SaveList = () => {
  const [saveItems, setSeveItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const { saveRecipe, setSaveRecipe } = useOutletContext();
  console.log("Data from SaveList", saveRecipe);

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Watched items updated:", saveItems);
    // additional actions here, such as updating the UI
  }, [saveItems]);

  // const addToSaveList = (newItem) => {
  //   setSeveItems((prevItems) => {
  //     const newSaveItems = [...prevItems, newItem];
  //     localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
  //     return newSaveItems;
  //   });
  // };

  const handleDeleteItem = (index) => {
    const newSaveItems = [...saveRecipe];
    newSaveItems.splice(index, 1);
    setSaveRecipe(newSaveItems);
    localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
  };

  useEffect(() => {
    console.log("Ich bin ausgeführt");
    const storedItem = JSON.parse(localStorage.getItem("saveItems"));
    if (storedItem) setSaveRecipe(storedItem);
  }, []);

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <section className="wrapper-save">
      <div>SaveList</div>
      <h5>Welcome {auth.user}</h5>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {saveRecipe.map((item, index) => (
          <section className="like-items">
            <li key={item.id}>
              <Link to={`/recipe/${item.id}`}>{item.title}</Link>
            </li>
            <span onClick={() => handleDeleteItem(index)} className="trash">
              ❌
            </span>
          </section>
        ))}
      </ul>
    </section>
  );
};

export default SaveList;
