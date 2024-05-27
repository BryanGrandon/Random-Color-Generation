import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset-css-styles.css";
import { ColorsContextProvider } from "./contexts/colors-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorsContextProvider>
      <App />
    </ColorsContextProvider>
  </React.StrictMode>
);
