import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useEffect, useRef, useState } from "react";
import "./SaveList.css";

const SaveList = () => {
  const auth = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };


  return (
    <section className="wrapper">
      <div>SaveList</div>
      <h5>Welcome {auth.user}</h5>
      <button onClick={handleLogout}>Logout</button>

    </section>
  );
};

export default SaveList;
