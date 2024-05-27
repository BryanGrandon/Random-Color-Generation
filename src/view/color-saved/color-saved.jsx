import React from "react";
import { useColorsContext } from "../../contexts/colors-context";
import ColorCard from "../../components/cards/color-card/color-card";
import TitleH2 from "../../components/title-h2/title-h2";
import "./color-saved.css";

function ColorSaved() {
  let { saved } = useColorsContext();
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
