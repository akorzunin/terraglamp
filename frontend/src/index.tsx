import * as ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./components/app/App";
import "./index.css";
import "./vendor/normalize.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

// override the default OpenAPI config from codegen
import "./api/config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
