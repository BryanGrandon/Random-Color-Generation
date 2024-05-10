import React, { createContext } from "react";

const ColorsContext = createContext();

function ColorsContextProvider({ children }) {
  const savedColors = [];

  return (
    <ColorsContext.Provider value={{ savedColors }}>
      {children}
    </ColorsContext.Provider>
  );
}

export { ColorsContext, ColorsContextProvider };
