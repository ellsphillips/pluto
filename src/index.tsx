import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/style.scss";

import Dashboard from "./pages/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Dashboard />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
