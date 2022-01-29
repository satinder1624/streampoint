import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [listOfCard, setlistOfCard] = useState([
    {
      id: 0,
      title: "Custom Title",
      text: "Custom Body Text",
      openOrClose: false,
      titleSize: "36",
      titleColor: "black",
      bodySize: "16",
      bodyColor: "#000000",
      cornerRadius: "16",
      pannelColor: "#FFFFFF",
    },
  ]);

  const [openOrClose, setOpenOrClose] = useState(false);
  const [editLine, setEditLine] = useState(false);

  const [titleText, setTitleText] = useState("");
  const [textArea, setTextArea] = useState("");

  const [titleSize, setTitleSize] = useState("36");
  const [titleColor, setTitleColor] = useState("#000000");
  const [bodySize, setBodySize] = useState("16");
  const [bodyColor, setBodyColor] = useState("#000000");
  const [cornerRadius, setCornerRadius] = useState("16");
  const [pannelColor, setPannelColor] = useState("#FFFFFF");

  return (
    <StoreContext.Provider
      value={{
        listOfCard,
        setlistOfCard,
        openOrClose,
        setOpenOrClose,
        editLine,
        setEditLine,
        titleText,
        setTitleText,
        textArea,
        setTextArea,
        titleSize,
        setTitleSize,
        titleColor,
        setTitleColor,
        bodySize,
        setBodySize,
        bodyColor,
        setBodyColor,
        cornerRadius,
        setCornerRadius,
        pannelColor,
        setPannelColor,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
