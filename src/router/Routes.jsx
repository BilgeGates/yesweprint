import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Product from "./pages/Product";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
