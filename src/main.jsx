import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Contact />
    <Footer />
  </StrictMode>
);
