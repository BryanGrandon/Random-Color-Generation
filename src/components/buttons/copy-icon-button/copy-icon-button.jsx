import React from "react";
import { IoCopyOutline, IoCopy } from "react-icons/io5";
import "./copy-icon-button.css";

function CopyIconButton({ onClick, value }) {
  return (
    <button onClick={onClick} value={value}>
      <IoCopyOutline className="icon icon-copy-outline" />
      <IoCopy className="icon icon-copy" />
    </button>
  );
}
export default CopyIconButton;