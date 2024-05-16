import React from "react";
import { useColorsContext } from "../../contexts/colors-context";
import Title from "../../components/other/title/title";
import CardColor from "../../components/card-color/card-color";
import "./styles.css";

function ViewColorSaved() {
  let { saved } = useColorsContext();
  let { handlerClickClose } = useColorsContext();

  return (
    <article className="color-saved">
      <Title text="Colors Saved" />
      <article className="list-color-saved">
        {saved.map((e) => (
          <CardColor
            key={e.id}
            hexadecimal={e.hex}
            onClick={handlerClickClose}
          />
        ))}
      </article>
    </article>
  );
}

export default ViewColorSaved;
