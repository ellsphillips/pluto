import React from "react";
import "./RadioButton.scss";

interface RadioButtonProps {
  label: string;
  text: string;
  image?: string;
}

const RadioButton = (props: RadioButtonProps) => (
  <div className="radio-button__wrapper">
    <input type="radio" name="user" id={props.label} />
    <label htmlFor={props.label}>
      {props.image && <img src={props.image} alt="A radio button selector" />}
      <div className="radio-button__text">
        <span>{props.text}</span>
      </div>
    </label>
    <div className="radio-button__check">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
      </svg>
    </div>
  </div>
);

export default RadioButton;
