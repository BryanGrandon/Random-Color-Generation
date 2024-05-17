import React from "react";
import "./color-card.css";
import { IoCloseSharp } from "react-icons/io5";

function ColorCard({ hexadecimal, onClick }) {
  const handlerClickCopyHex = (e) => {
    let color = e.target.innerText;
    navigator.clipboard.writeText([color]);
  };
  return (
    <section
      onClick={handlerClickCopyHex}
      style={{ backgroundColor: hexadecimal }}
      className="color-card"
      value={hexadecimal}
    >
      <p className="color-card__hex">{hexadecimal}</p>
      <button value={hexadecimal} onClick={onClick} className="color-card__btn">
        <IoCloseSharp className="svg__close" />
      </button>
    </section>
  );
}
export default ColorCard;