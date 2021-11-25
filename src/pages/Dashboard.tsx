import React, { useState } from "react";

import App from "../components/App";
import Header from "../components/Header";

import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />

        <App />
      </div>
    </div>
  );
}

export default Dashboard;
