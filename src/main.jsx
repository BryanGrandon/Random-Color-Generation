import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset-css-styles.css";
import { RandomColorGenerationProvider } from "./contexts/random-color-generation-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RandomColorGenerationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RandomColorGenerationProvider>
);
