import React from "react";
import "./select-color.css";

function SelectColor() {
  return (
    <article className="select-color">
      <h2 className="select-color__h2">Select Color</h2>

      <section className="select-color__color">
        <section className="select-color__options">
          <input type="color" className="select-color__input-color" />
          <input type="text" className="select-color__input-text" />
          <section className="select-color__buttons">
            <button>copy</button>
            <button>save</button>
            <button className="select-color__btn">Random</button>
          </section>
        </section>
      </section>
    </article>
  );
}

export default SelectColor;
