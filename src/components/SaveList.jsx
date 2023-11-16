import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useEffect, useState } from "react";
import "./SaveList.css";

const SaveList = () => {
  const [saveItems, setSeveItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const auth = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    console.log("Watched items updated:", saveItems);
    // additional actions here, such as updating the UI
  }, [saveItems]);

  const addToSaveList = (newItem) => {
    setSeveItems((prevItems) => {
      const newSaveItems = [...prevItems, newItem];
      localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
      return newSaveItems;
    });
  };

  const handleDeleteItem = (index) => {
    const newSaveItems = [...saveItems];
    newSaveItems.splice(index, 1);
    setSeveItems(newSaveItems);
    localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
  };


  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("saveItems"));
    if (storedItem) setSeveItems(storedItem);
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
        {saveItems.map((item, index) => (
          <section className="like-items">
            <li key={item}>{item}</li>
            <span onClick={() => handleDeleteItem(index)} className="trash">
              ❌
            </span>
          </section >
        ))}
      </ul>

      <button className="like" onClick={() => addToSaveList("New Item")}>💓</button>
    </section>
  );
};

export default SaveList;
