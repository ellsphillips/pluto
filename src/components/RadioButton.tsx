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
  </div>
);

export default RadioButton;
