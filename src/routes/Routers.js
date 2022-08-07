import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import FoodDetails from "../pages/FoodDetails";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Report from "../pages/Report";
import Admin from "../pages/Admin";

const PREFIX = 'http://localhost:4000'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/report" element={<Report />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export const API_ROUTES = {
  food: `${PREFIX}/products`
}

export default Routers;
