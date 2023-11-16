import "./App.css";
import Carousel from "./components/Carousel.jsx";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import { AuthProvider } from "./components/Auth";
import { useState } from "react";
import Footer from "./components/Footer.jsx";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Carousel />
        <Outlet context={{ data, setData }} />
        <Footer />
      </AuthProvider>

      {/* <Navbar /> */}

      {/* <Outlet /> */}
    </>
  );
}

export default App;
