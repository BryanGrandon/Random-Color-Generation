import React, { useState } from "react";
import "./gradient.css";
import { randomColor } from "../../contexts/functions";

function Gradient() {
  const $ = (element) => document.querySelector(`.${element}`);
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();
  const [degrees, setDegrees] = useState();

  const generateGradient = (deg, color1, color2) => {
    $("gradient__gradient").style.setProperty(
      "background",
      `linear-gradient(${deg}deg, ${color1}, ${color2})`
    );
  };
  const handlerChangeInputColor = (e) => {
    let classList = e.target.classList.value;
    if (classList.includes("color-1")) {
      let color = e.target.value;
      $("text-color-1").value = color;
      setColor1(color);
      generateGradient(degrees, color, color2);
    } else if (classList.includes("color-2")) {
      let color = e.target.value;
      $("text-color-2").value = color;
      setColor2(color);
      generateGradient(degrees, color1, color2);
    }
  };
  const handlerChangeInputText = (e) => {
    let classList = e.target.classList.value;
    if (classList.includes("text-color-1")) {
      let color = e.target.value;
      if (color.length == 7) {
        $("color-1").value = color;
        setColor1(color);
        generateGradient(degrees, color, color2);
      }
    } else if (classList.includes("text-color-2")) {
      let color = e.target.value;
      if (color.length == 7) {
        $("color-2").value = color;
        setColor2(color);
        generateGradient(degrees, color1, color);
      }
    }
  };
  const handlerChangeDeg = (e) => {
    let deg = e.target.value;
    setDegrees(deg);
    generateGradient(deg, color1, color2);
  };

  const handlerClickRandomGradient = () => {
    let deg = Math.floor(Math.random() * 360);
    let color1 = randomColor();
    let color2 = randomColor();
    $("color-1").value = color1;
    $("color-2").value = color2;
    $("text-color-1").value = color1;
    $("text-color-2").value = color2;
    $("degrees").value = deg;
    setColor1(color1);
    setColor2(color2);
    setDegrees(deg);
    generateGradient(deg, color1, color2);
  };

  return (
    <article className="gradient">
      <h2 className="gradient__h2">Gradient</h2>
      <article className="gradient__gradient">
        <section className="gradient__options">
          <section className="gradient__color">
            <input
              type="color"
              onChange={handlerChangeInputColor}
              className="gradient__input-color color-1"
            />
            <input
              type="text"
              onChange={handlerChangeInputText}
              className="gradient__input-text text-color-1"
            />
          </section>
          <section className="gradient__color">
            <input
              type="color"
              onChange={handlerChangeInputColor}
              className="gradient__input-color color-2"
            />
            <input
              type="text"
              onChange={handlerChangeInputText}
              className="gradient__input-text text-color-2"
            />
          </section>
          <label className="gradient__input-degrees">
            Degrees:
            <input
              type="number"
              onChange={handlerChangeDeg}
              className="gradient__input-number degrees"
            />
          </label>
          <button
            className="gradient__button"
            onClick={handlerClickRandomGradient}
          >
            Random
          </button>
        </section>
      </article>
    </article>
  );
}

export default Gradient;
