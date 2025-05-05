import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const res = await navigator.serviceWorker.register("./sw.js");
      console.log("registered", res);
    } catch (e) {
      console.log("falied", e);
    }
  });
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
