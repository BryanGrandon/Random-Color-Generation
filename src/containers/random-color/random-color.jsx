import React, { useContext, useState } from "react";
import { ColorsContext } from "../../contexts/colors-context";
import { randomColor } from "./functions";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
import ButtonSaved, {
  saveIcon,
} from "../../components/button-saved/button-saved";
import "./styles.css";

function RandomColor() {
  const $ = (element) => document.querySelector(`.${element}`);
  const [hex, setHex] = useState();
  let { savedColors } = useContext(ColorsContext);

  const randomColorClick = () => {
    let generatedColor = randomColor();
    savedColors.includes(generatedColor)
      ? saveIcon.marking()
      : saveIcon.unmarked();
    $("select-color").value = generatedColor;
    $("show-color").style.setProperty("background-color", generatedColor);
    setHex(generatedColor);
  };
  const inputColorChange = (e) => {
    let valueColor = e.target.value;

    savedColors.includes(valueColor) ? saveIcon.marking() : saveIcon.unmarked();
    $("show-color").style.setProperty("background-color", valueColor);
    setHex(valueColor);
  };
  const saveColorClick = () => {
    if (!savedColors.includes(hex)) {
      savedColors.push(hex);
      saveIcon.marking();
    } else if (savedColors.includes(hex)) {
      let index = savedColors.indexOf(hex);
      savedColors[index] = "";
      saveIcon.unmarked();
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
        <ButtonSaved onClick={saveColorClick} />
      </section>

      <Button onClick={randomColorClick} text="Random color" />
    </article>
  );
}

export default RandomColor;
