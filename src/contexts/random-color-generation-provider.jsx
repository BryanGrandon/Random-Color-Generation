import React, { createContext } from "react";

const RandomColorGeneration = createContext();
function RandomColorGenerationProvider({ children }) {
  const savedColors = [];

  return (
    <RandomColorGeneration.Provider value={{ savedColors }}>
      {children}
    </RandomColorGeneration.Provider>
  );
}

export { RandomColorGeneration, RandomColorGenerationProvider };
