import React from "react";
import ColorCard from "../../components/cards/color-card/color-card";
import { useColorsContext } from "../../contexts/colors-context";
import "./color-saved.css";

function ColorSaved() {
  let { saved } = useColorsContext();
  let { handlerClickClose } = useColorsContext();

  return (
    <article className="color-saved">
      <h2 className="color-saved__h2">Color saved</h2>
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
