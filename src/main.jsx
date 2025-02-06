import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bulma/css/bulma.min.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import FooterBar from "./components/FooterBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <App />
    <FooterBar />
  </StrictMode>
);
