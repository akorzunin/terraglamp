// @ts-nocheck
import React from "react"; // @ts-ignore
import ReactDOM from "react-dom/client"; // @ts-ignore
import App from "./components/app/App";
import "./index.css";
import "./vendor/normalize.css";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
