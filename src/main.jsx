import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import "./index.css";
import router from "./Router/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
