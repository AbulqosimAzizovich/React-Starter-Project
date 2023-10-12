import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "./../pages/About/About";
import Error from "./../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [],
  },
]);

export default router;
