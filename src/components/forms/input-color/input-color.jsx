import React from "react";
import "./input-color.css";

function InputColor({ onChange, className }) {
  return (
    <input
      type="color"
      className={"input__color " + className}
      onChange={onChange}
    />
  );
}
export default InputColor;
