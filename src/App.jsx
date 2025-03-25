import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Moives from "./pages/Moives";
import Shows from "./pages/Shows";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Moives />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
