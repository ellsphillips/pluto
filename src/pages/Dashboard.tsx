import React, { useState } from "react";

import App from "../components/App";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "./Dashboard.scss";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="dashboard-wrapper">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="dashboard-container">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <App />
      </div>
    </div>
  );
}

export default Dashboard;
