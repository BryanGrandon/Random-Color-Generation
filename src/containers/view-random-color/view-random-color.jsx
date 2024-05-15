import React, { useEffect } from "react";
import { useColorsContext } from "../../contexts/colors-context";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
import ButtonSaved from "../../components/button-saved/button-saved";
import ButtonCopy from "../../components/button-copy/button-copy";
import "./styles.css";

function ViewRandomColor() {
  // useState
  let { hexadecimal } = useColorsContext();

  // Action function
  let {
    handlerClickRandomColor,
    handlerChangeInputColor,
    handlerClickSaveColor,
  } = useColorsContext();

  useEffect(() => {
    handlerClickRandomColor();
  }, []);

  return (
    <article className="random-color">
      <Title text="Random Color Generation" />
      <input
        type="color"
        className="select-color"
        id="id-select-color"
        onChange={handlerChangeInputColor}
      />
      <section className="random-color__select-color">
        <section className="random-color__change-color">
          <p>Change color:</p>
          <label htmlFor="id-select-color" className="show-color">
            {hexadecimal}
          </label>
          <ButtonCopy
            onClick={() => navigator.clipboard.writeText([hexadecimal])}
          />
        </section>
        <ButtonSaved onClick={handlerClickSaveColor} />
      </section>

      <Button onClick={handlerClickRandomColor} text="Random color" />
    </article>
  );
}

export default ViewRandomColor;
