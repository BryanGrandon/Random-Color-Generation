import React from "react";
import ButtonCopy from "../other/button-copy/button-copy";

import { IoMdClose } from "react-icons/io";
import "./styles.css";

function CardColor({ color, hexadecimal, onClick }) {
  const handlerClickCopyHex = (event) => {
    const eventName = event.target.nodeName;
    let color =
      eventName == "svg"
        ? event.target.parentNode.value
        : event.target.parentNode.parentNode.value;
    navigator.clipboard.writeText([color]);
  };

  return (
    <section className="card-color">
      <span
        className="card-color__color"
        style={{ backgroundColor: hexadecimal }}
      >
        {color}
      </span>
      <p className="card-color__hex">{hexadecimal}</p>

      <ButtonCopy onClick={handlerClickCopyHex} value={hexadecimal} />
      <button className="card-color__btn" value={hexadecimal} onClick={onClick}>
        <IoMdClose className="svg__close" />
      </button>
    </section>
  );
}

export default CardColor;
