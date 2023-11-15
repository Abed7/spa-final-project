import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./components/Explore.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import NoMatch from "./components/NoMatch.jsx";
import SaveList from "./components/SaveList.jsx";


const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "savelist",
        element: (<RequireAuth><SaveList /></RequireAuth>),
      },
      {
        path: "Profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path:"login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
