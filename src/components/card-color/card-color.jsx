import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./styles.css";

function CardColor({ color, hexadecimal, onClick }) {
  return (
    <section className="card-color">
      <span
        className="card-color__color"
        style={{ backgroundColor: hexadecimal }}
      >
        {color}
      </span>
      <p className="card-color__hex">{hexadecimal}</p>
      <button className="card-color__btn" value={hexadecimal} onClick={onClick}>
        <IoMdClose className="svg__close" />
      </button>
    </section>
  );
}

export default CardColor;
