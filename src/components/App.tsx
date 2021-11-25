import React from "react";

import logo from "../img/logo.svg";
import "./App.scss";

import Icon from "./Icon";
import RadioButton from "./RadioButton";

function App() {
  return (
    <div
      style={{
        marginTop: "4rem",
        padding: "2rem",
        width: "100%",
        backgroundColor: "var(--clr-grey-700)",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <header className="App-header">
        <Icon
          type="ROUNDED"
          src={logo}
          size={240}
          padding={40}
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
        <RadioButton label="R2" text="Radio-2" />
        <RadioButton label="R3" text="Radio-3" image={logo} />
      </header>
    </div>
  );
}

export default App;