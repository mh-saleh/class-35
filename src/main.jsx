import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StaticRouter } from "react-router-dom/server.js";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
