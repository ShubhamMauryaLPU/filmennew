import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Food from "./pages/Food";
import Drink from "./pages/Drink";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drink" element={<Drink />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
