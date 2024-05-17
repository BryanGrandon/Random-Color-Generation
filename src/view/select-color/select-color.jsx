import React, { useEffect } from "react";
import { useColorsContext } from "../../contexts/colors-context";
import SavedIconButton from "../../components/buttons/saved-icon-button/saved-icon-button";
import CopyIconButton from "../../components/buttons/copy-icon-button/copy-icon-button";
import "./select-color.css";

function SelectColor() {
  let { hexadecimal } = useColorsContext();
  let {
    handlerClickRandomColor,
    handlerChangeInputColor,
    handlerChangeInputText,
    handlerClickSaveColor,
  } = useColorsContext();

  useEffect(() => {
    handlerClickRandomColor();
  }, []);

  return (
    <article className="select-color">
      <h2 className="select-color__h2">Select Color</h2>

      <section className="select-color__color">
        <section className="select-color__options">
          <input
            type="color"
            className="select-color__input-color"
            onChange={handlerChangeInputColor}
          />
          <input
            type="text"
            className="select-color__input-text"
            onChange={handlerChangeInputText}
          />
          <section className="select-color__buttons">
            <CopyIconButton
              onClick={() => navigator.clipboard.writeText([hexadecimal])}
            />
            <SavedIconButton onClick={handlerClickSaveColor} />
            <button
              className="select-color__btn"
              onClick={handlerClickRandomColor}
            >
              Random
            </button>
          </section>
        </section>
      </section>
    </article>
  );
}

export default SelectColor;
