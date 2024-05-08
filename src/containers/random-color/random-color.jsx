import React, { useState } from "react";
import "./styles.css";

import { Title } from "../../components/title/title";
import { randomColor } from "./functions";
import Button from "../../components/button/button";

function RandomColor() {
  const [hex, setHex] = useState();
  const saved = [];

  const $ = (element) => document.querySelector(`.${element}`);

  const randomColorClick = () => {
    let generatedColor = randomColor();
    $("input-color").value = generatedColor;
    $("random-color__show-color").style.setProperty(
      "background-color",
      generatedColor
    );
    setHex(generatedColor);
  };

  const inputColorChange = (e) => {
    $("random-color__show-color").style.setProperty(
      "background-color",
      e.target.value
    );
    setHex(e.target.value);
  };

  return (
    <article className="random-color">
      <Title text="Random Color Generation" />
      <section className="random-color__show-color"></section>

      <section className="generation__section">
        <label className="label">
          Change Color:
          <input
            type="color"
            className="input-color"
            onChange={inputColorChange}
          />
        </label>
        <button>Save</button>
      </section>
      <Button onClick={randomColorClick} text="Random color" />
    </article>
  );
}

export default RandomColor;
