import React from "react";
import ColorCard from "../../components/cards/color-card/color-card";
import { useColorsContext } from "../../contexts/colors-context";
import "./color-saved.css";
import TitleH2 from "../../components/title-h2/title-h2";

function ColorSaved() {
  let saved = JSON.parse(localStorage.getItem("savedColors"));
  let { handlerClickClose } = useColorsContext();

  return (
    <article className="color-saved">
      <TitleH2 text="Color saved" />
      <section className="color-saved__list">
        {saved.map((e) => (
          <ColorCard
            key={e.id}
            hexadecimal={e.hex}
            onClick={handlerClickClose}
          />
        ))}
      </section>
    </article>
  );
}

export default ColorSaved;
