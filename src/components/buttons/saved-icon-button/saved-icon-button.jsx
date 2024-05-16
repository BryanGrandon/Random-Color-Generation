import React from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import "./saved-icon-button.css";

const actionsSavedIcon = {
  marking() {
    document
      .querySelector(".icon-marking")
      .style.setProperty("display", "block");
    document
      .querySelector(".icon-unmarked")
      .style.setProperty("display", "none");
  },
  unmarked() {
    document
      .querySelector(".icon-marking")
      .style.setProperty("display", "none");
    document
      .querySelector(".icon-unmarked")
      .style.setProperty("display", "block");
  },
};

function SavedIconButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <FaBookmark className="icon icon-marking" />
      <FaRegBookmark className="icon icon-unmarked" />
    </button>
  );
}
export { actionsSavedIcon };
export default SavedIconButton;
