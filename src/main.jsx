import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StaticRouter } from "react-router-dom/server.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StaticRouter location={`/`}>
    <App />
  </StaticRouter>
);
