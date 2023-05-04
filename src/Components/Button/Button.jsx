import React from "react";
import "./Button.css";

function Button(props) {
  return <button className="buttonDesign">{props.text}</button>;
}

export default Button;
