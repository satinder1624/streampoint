import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreContextProvider from "../src/store/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
