import React from "react";
import "./color-card.css";
import { IoCloseSharp } from "react-icons/io5";
import { alertCopy } from "../../../contexts/functions";

function ColorCard({ hexadecimal, onClick }) {
  const handlerClickCopyHex = (e) => {
    let color = e.target.innerText;
    navigator.clipboard.writeText([color]);
    alertCopy(color);
  };
  return (
    <section style={{ backgroundColor: hexadecimal }} className="color-card">
      <p onClick={handlerClickCopyHex} className="color-card__hex">
        {hexadecimal}
      </p>
      <button value={hexadecimal} onClick={onClick} className="color-card__btn">
        <IoCloseSharp className="svg__close" />
      </button>
    </section>
  );
}
export default ColorCard;
