import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useEffect, useState } from "react";
import "./SaveList.css";

const SaveList = () => {
    const [saveItems, setSeveItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const auth = useAuth();
  const navigate = useNavigate();
  


  useEffect(() => {
    
    console.log('Watched items updated:', saveItems);
    // additional actions here, such as updating the UI
  }, [saveItems]);

  const addToSaveList = newItem => {
    setSeveItems(prevItems => [...prevItems, newItem]);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };



  return (
    <section className="wrapper">
      <div>SaveList</div>
      <h5>Welcome {auth.user}</h5>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {saveItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToSaveList('New Item')}>Add to List</button>
    </section>
  );
};

export default SaveList;
