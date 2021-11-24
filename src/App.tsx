import React from "react";
import logo from "./img/logo.svg";
import "./App.css";
import Icon from "./components/Icon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon
          type="ROUNDED"
          src={logo}
          size={400}
          padding={100}
          onClick={() => alert("Future router...")}
        />

        <a
          className="App-link"
          href="https://github.com/ellsphillips/doctor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doctor
        </a>
      </header>
    </div>
  );
}

export default App;
