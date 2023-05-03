import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalContextProvider } from "./context/GlobalContext";
import App from "./App";
const app = (
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
