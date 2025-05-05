import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Food from "./pages/Food";
import Drink from "./pages/Drink";
import ShowPage from "./components/ShowPage";

const App = () => {
  // Reflect actual connection status at mount
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineBanner, setShowOnlineBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineBanner(true);

      // Hide "back online" banner after 3 seconds
      setTimeout(() => {
        setShowOnlineBanner(false);
      }, 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    // Attach listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/product/:id" element={<ShowPage />} />
      </Routes>
      <Footer />

      {/* Offline persistent banner */}
      {!isOnline && (
        <div className="fixed bottom-0 py-2 text-center font-bold bg-red-600 left-0 w-full text-white">
          You are offline
        </div>
      )}

      {/* Online banner shown temporarily */}
      {showOnlineBanner && isOnline && (
        <div className="fixed bottom-0 py-2 text-center font-bold bg-green-600 left-0 w-full text-white">
          Back to Online
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
