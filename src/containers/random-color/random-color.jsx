import React, { useContext, useState } from "react";
import { randomColor } from "./functions";
import { Title } from "../../components/title/title";
import Button from "../../components/button/button";
import { RandomColorGeneration } from "../../contexts/random-color-generation-provider";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import "./styles.css";

function RandomColor() {
  const $ = (element) => document.querySelector(`.${element}`);
  const [hex, setHex] = useState();
  const { savedColors } = useContext(RandomColorGeneration);

  const icon = {
    marking() {
      $("icon-marking").style.setProperty("display", "block");
      $("icon-unmarked").style.setProperty("display", "none");
    },
    unmarked() {
      $("icon-marking").style.setProperty("display", "none");
      $("icon-unmarked").style.setProperty("display", "block");
    },
  };

  const randomColorClick = () => {
    icon.unmarked();
    let generatedColor = randomColor();
    $("select-color").value = generatedColor;
    $("show-color").style.setProperty("background-color", generatedColor);
    setHex(generatedColor);
  };
  const inputColorChange = (e) => {
    icon.unmarked();
    let valueColor = e.target.value;
    $("show-color").style.setProperty("background-color", valueColor);
    setHex(valueColor);
  };

  const saveColorClick = () => {
    if (!savedColors.includes(hex)) {
      savedColors.push(hex);
      icon.marking();
    } else if (savedColors.includes(hex)) {
      savedColors.pop();
      icon.unmarked();
    }
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
        <button onClick={saveColorClick}>
          <FaBookmark className="icon icon-marking" />
          <FaRegBookmark className="icon icon-unmarked" />
        </button>
      </section>

      <Button onClick={randomColorClick} text="Random color" />
    </article>
  );
}

export default RandomColor;
