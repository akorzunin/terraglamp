
import * as ReactDOM from "react-dom/client";
import * as React from "react";
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
