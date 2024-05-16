import React, { createContext, useContext, useState } from "react";
import { actionsSavedIcon } from "../components/buttons/saved-icon-button/saved-icon-button";
import { randomColor, searchColor } from "./functions";

const ColorsContext = createContext();
const useColorsContext = () => {
  return useContext(ColorsContext);
};

function ColorsContextProvider({ children }) {
  const [saved, setSaved] = useState([]);
  const [hexadecimal, setHexadecimal] = useState("");
  const $ = (element) => document.querySelector(`.${element}`);

  const deleteColor = (color) => {
    const newSaved = saved.filter((e) => e.hex !== color);
    for (let i = 0; i < newSaved.length; i++) {
      newSaved[i].id = i;
    }
    setSaved(newSaved);
  };

  const handlerClickRandomColor = () => {
    let color = randomColor();
    searchColor(saved, color)
      ? actionsSavedIcon.marking()
      : actionsSavedIcon.unmarked();
    $("select-color").value = color;
    $("show-color").style.setProperty("background-color", color);
    setHexadecimal(color);
  };

  const handlerChangeInputColor = (e) => {
    let color = e.target.value;
    searchColor(saved, color)
      ? actionsSavedIcon.marking()
      : actionsSavedIcon.unmarked();
    $("show-color").style.setProperty("background-color", color);
    setHexadecimal(color);
  };

  const handlerClickSaveColor = () => {
    if (!searchColor(saved, hexadecimal)) {
      const info = {
        id: saved.length,
        hex: hexadecimal,
      };
      setSaved([...saved, info]);
      actionsSavedIcon.marking();
    } else if (searchColor(saved, hexadecimal)) {
      deleteColor(hexadecimal);
      actionsSavedIcon.unmarked();
    }
  };

  const handlerClickClose = (event) => {
    const eventName = event.target.nodeName;
    let color =
      eventName == "svg"
        ? event.target.parentNode.value
        : event.target.parentNode.parentNode.value;
    if (color == hexadecimal) actionsSavedIcon.unmarked();
    deleteColor(color);
  };

  return (
    <ColorsContext.Provider
      value={{
        saved,
        hexadecimal,
        handlerClickRandomColor,
        handlerChangeInputColor,
        handlerClickSaveColor,
        handlerClickClose,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
}

export { useColorsContext, ColorsContextProvider };
