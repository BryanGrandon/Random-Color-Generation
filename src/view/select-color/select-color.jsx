import React, { useEffect } from "react";
import { useColorsContext } from "../../contexts/colors-context";
import SavedIconButton from "../../components/buttons/saved-icon-button/saved-icon-button";
import CopyIconButton from "../../components/buttons/copy-icon-button/copy-icon-button";
import MainButton from "../../components/buttons/main-button/main-button";
import TitleH2 from "../../components/title-h2/title-h2";
import { alertCopy } from "../../contexts/functions";
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
      <TitleH2 text="Select color" />
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
              onClick={() => {
                navigator.clipboard.writeText([hexadecimal]);
                alertCopy(hexadecimal);
              }}
            />
            <SavedIconButton onClick={handlerClickSaveColor} />

            <MainButton text="Random" onclick={handlerClickRandomColor} />
          </section>
        </section>
      </section>
    </article>
  );
}

export default SelectColor;
