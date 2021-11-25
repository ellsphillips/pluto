import React from "react";

import App from "../components/App";
import Header from "../components/Header";

import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <Header />

        <App />
      </div>
    </div>
  );
}

export default Dashboard;
