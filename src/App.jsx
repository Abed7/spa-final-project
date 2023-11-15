import "./App.css";
import Carousel from "./components/Carousel.jsx";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import { AuthProvider } from "./components/Auth";

import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Carousel />
        <Outlet />
        <Footer />
      </AuthProvider>

      {/* <Navbar /> */}

      {/* <Outlet /> */}
    </>
  );
}

export default App;
