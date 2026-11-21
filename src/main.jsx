import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/classical.css"; // Tema Greek Classical (menimpa gaya dasar)

createRoot(document.getElementById("root")).render(<App />);
