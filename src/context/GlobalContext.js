import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer.js";

//initialState
const initialState = {
  list: [],
};

//creataContext
export const GlobalContext = createContext(initialState);

//create provider component to wrap your app
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
