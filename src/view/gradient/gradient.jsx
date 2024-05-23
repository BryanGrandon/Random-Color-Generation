import React, { useEffect, useState } from "react";
import { randomColor } from "../../contexts/functions";
import "./gradient.css";
import MainButton from "../../components/buttons/main-button/main-button";
import TitleH2 from "../../components/title-h2/title-h2";

function Gradient() {
  const $ = (element) => document.querySelector(`.${element}`);
  const [colorOne, setColorOne] = useState();
  const [colorTwo, setColorTwo] = useState();
  const [degrees, setDegrees] = useState();

  const generateGradient = (deg, color1, color2) => {
    $("gradient__gradient").style.setProperty(
      "background",
      `linear-gradient(${deg}deg, ${color1}, ${color2})`
    );
  };
  const handlerChangeColor1 = (e) => {
    let color = e.target.value;
    $("text-color-1").value = color;
    setColorOne(color);
    generateGradient(degrees, color, colorTwo);
  };
  const handlerChangeColorText1 = (e) => {
    let color = e.target.value;
    if (color.length == 7) {
      $("color-1").value = color;
      setColorOne(color);
      generateGradient(degrees, color, colorTwo);
    }
  };
  const handlerChangeColor2 = (e) => {
    let color = e.target.value;
    $("text-color-2").value = color;
    setColorTwo(color);
    generateGradient(degrees, colorOne, color);
  };
  const handlerChangeColorText2 = (e) => {
    let color = e.target.value;
    if (color.length == 7) {
      $("color-2").value = color;
      setColorTwo(color);
      generateGradient(degrees, colorOne, color);
    }
  };
  const handlerChangeDegrees = (e) => {
    let deg = e.target.value;
    setDegrees(deg);
    generateGradient(deg, colorOne, colorTwo);
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
    setColorOne(color1);
    setColorTwo(color2);
    setDegrees(deg);
    generateGradient(deg, color1, color2);
  };
  useEffect(() => {
    handlerClickRandomGradient();
  }, []);

  return (
    <article className="gradient">
      <TitleH2 text="Gradient" />
      <article className="gradient__gradient">
        <section className="gradient__options">
          <section className="gradient__color">
            <input
              type="color"
              onChange={handlerChangeColor1}
              className="gradient__input-color color-1"
            />
            <input
              type="text"
              onChange={handlerChangeColorText1}
              className="gradient__input-text text-color-1"
            />
          </section>
          <section className="gradient__color">
            <input
              type="color"
              onChange={handlerChangeColor2}
              className="gradient__input-color color-2"
            />
            <input
              type="text"
              onChange={handlerChangeColorText2}
              className="gradient__input-text text-color-2"
            />
          </section>
          <label className="gradient__input-degrees">
            Degrees:
            <input
              type="number"
              onChange={handlerChangeDegrees}
              className="gradient__input-number degrees"
            />
          </label>
          <MainButton text="Random" onclick={handlerClickRandomGradient} />
        </section>
      </article>
    </article>
  );
}

export default Gradient;
