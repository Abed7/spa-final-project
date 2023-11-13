import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;
