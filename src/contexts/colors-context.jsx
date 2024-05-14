import React, { createContext, useContext, useState } from "react";
import { saveIcon } from "../components/button-saved/button-saved";

import { randomColor } from "./functions";

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

  const searchColor = (color) => {
    let theColors = [];
    saved.map((e) => theColors.push(e.hex));
    return theColors.includes(color);
  };

  const handlerClickRandomColor = () => {
    let color = randomColor();
    searchColor(color) ? saveIcon.marking() : saveIcon.unmarked();
    $("select-color").value = color;
    $("show-color").style.setProperty("background-color", color);
    setHexadecimal(color);
  };

  const handlerChangeInputColor = (e) => {
    let color = e.target.value;
    searchColor(color) ? saveIcon.marking() : saveIcon.unmarked();
    $("show-color").style.setProperty("background-color", color);
    setHexadecimal(color);
  };

  const handlerClickSaveColor = () => {
    if (!searchColor(hexadecimal)) {
      const info = {
        id: saved.length,
        hex: hexadecimal,
      };
      setSaved([...saved, info]);
      saveIcon.marking();
    } else if (searchColor(hexadecimal)) {
      deleteColor(hexadecimal);
      saveIcon.unmarked();
    }
  };

  return (
    <ColorsContext.Provider
      value={{
        saved,
        hexadecimal,
        handlerClickRandomColor,
        handlerChangeInputColor,
        handlerClickSaveColor,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
}

export { useColorsContext, ColorsContextProvider };
