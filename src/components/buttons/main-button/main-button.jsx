import React from "react";
import "./main-button.css";

function MainButton({ text, onclick }) {
  return (
    <button className="button" onClick={onclick}>
      {text}
    </button>
  );
}

export default MainButton;
