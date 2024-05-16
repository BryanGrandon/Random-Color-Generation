import React from "react";
import { IoCopyOutline, IoCopy } from "react-icons/io5";
import "./button-copy.css";

function ButtonCopy({ onClick, value }) {
  return (
    <button onClick={onClick} value={value}>
      <IoCopyOutline className="icon icon-copy-outline" />
      <IoCopy className="icon icon-copy" />
    </button>
  );
}

export default ButtonCopy;
