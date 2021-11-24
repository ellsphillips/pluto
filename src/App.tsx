import React from "react";
import logo from "./img/logo.svg";
import "./App.css";
import Icon from "./components/Icon";
import RadioButton from "./components/RadioButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon
          type="ROUNDED"
          src={logo}
          size={240}
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

        <RadioButton label="R1" text="Radio-1" image={logo} />
        <RadioButton label="R2" text="Radio-2" image={logo} />
        <RadioButton label="R3" text="Radio-3" image={logo} />
      </header>
    </div>
  );
}

export default App;
