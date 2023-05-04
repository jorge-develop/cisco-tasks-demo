import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer.js";
const LOCAL_STORAGE_KEY = "cisco-todos";
const savedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//initialState
const initialState = savedState || {
  list: [],
  titleEdit: false,
};
export const GlobalContext = createContext(initialState);

//create provider component to wrap your app
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
