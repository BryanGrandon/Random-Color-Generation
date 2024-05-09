import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import "./styles.css";

import { Title } from "../../components/title/title";
import { randomColor } from "./functions";
import Button from "../../components/button/button";

function RandomColor() {
  const $ = (element) => document.querySelector(`.${element}`);
  const [hex, setHex] = useState();
  const saved = [];

  const randomColorClick = () => {
    let generatedColor = randomColor();
    $("select-color").value = generatedColor;
    $("show-color").style.setProperty("background-color", generatedColor);
    setHex(generatedColor);
  };
  const inputColorChange = (e) => {
    $("show-color").style.setProperty("background-color", e.target.value);
    setHex(e.target.value);
  };

  return (
    <article className="random-color">
      <Title text="Random Color Generation" />
      <input
        type="color"
        className="select-color"
        id="id-select-color"
        onChange={inputColorChange}
      />
      <section className="random-color__select-color">
        <section className="random-color__change-color">
          <p>Change color:</p>
          <label htmlFor="id-select-color" className="show-color">
            {hex}
          </label>
        </section>
        <button className="btn-save">
          <FaRegBookmark />
          <FaBookmark />
        </button>
      </section>

      <Button onClick={randomColorClick} text="Random color" />
    </article>
  );
}

export default RandomColor;
