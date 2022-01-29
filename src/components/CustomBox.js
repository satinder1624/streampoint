import React, { useContext } from "react";
import { StoreContext } from "../store/store";
import "../styles/customBox.css";
function CustomBox({
  id,
  title,
  text,
  editCondition,
  titleSizeMap,
  titleColorMap,
  bodySizeMap,
  bodyColorMap,
  cornerRadiusMap,
  pannelColorMap,
}) {
  const { listOfCard, setlistOfCard } = useContext(StoreContext);
  const { openOrClose, setOpenOrClose } = useContext(StoreContext);

  const { titleText, setTitleText } = useContext(StoreContext);
  const { textArea, setTextArea } = useContext(StoreContext);

  const { titleSize, setTitleSize } = useContext(StoreContext);
  const { bodySize, setBodySize } = useContext(StoreContext);
  const { cornerRadius, setCornerRadius } = useContext(StoreContext);
  const { titleColor, setTitleColor } = useContext(StoreContext);
  const { bodyColor, setBodyColor } = useContext(StoreContext);
  const { pannelColor, setPannelColor } = useContext(StoreContext);

  const editHandler = () => {
    setOpenOrClose(!openOrClose);
    listOfCard[id].openOrClose = !openOrClose;
  };

  const editDoneHandler = () => {
    setOpenOrClose(!openOrClose);
    listOfCard[id].openOrClose = !openOrClose;
    // Id hai then id use as indes then store content use to update title and text and after update set it back to null
    if (titleText !== "" || textArea !== "") {
      titleText === ""
        ? (listOfCard[id].text = textArea)
        : (listOfCard[id].title = titleText);

      textArea === ""
        ? (listOfCard[id].title = titleText)
        : (listOfCard[id].text = textArea);
    }
    setTitleText("");
    setTextArea("");
    // Color Settings
    listOfCard[id].titleSize = titleSize;
    setTitleSize(listOfCard[id].titleSize);
    listOfCard[id].titleColor = titleColor;
    setTitleColor(listOfCard[id].titleColor);
    //
    listOfCard[id].bodySize = bodySize;
    setBodySize(listOfCard[id].bodySize);
    listOfCard[id].bodyColor = bodyColor;
    setBodyColor(listOfCard[id].bodyColor);
    //
    listOfCard[id].cornerRadius = cornerRadius;
    setCornerRadius(listOfCard[id].cornerRadius);
    listOfCard[id].pannelColor = pannelColor;
    setPannelColor(listOfCard[id].pannelColor);
  };

  const deleteHandler = () => {
    setlistOfCard([...listOfCard.slice(0, id), ...listOfCard.slice(id + 1)]);
  };

  const copyHandler = () => {
    const newObject = {
      id: listOfCard.length,
      title: title,
      text: text,
      openOrClose: false,
      titleSize: titleSizeMap,
      titleColor: titleColorMap,
      bodySize: bodySizeMap,
      bodyColor: bodyColorMap,
      cornerRadius: cornerRadiusMap,
      pannelColor: pannelColorMap,
    };

    setlistOfCard([...listOfCard, newObject]);
  };

  return (
    <div
      className="one-card-box"
      style={{
        backgroundColor: pannelColorMap,
        borderRadius: cornerRadiusMap + "px",
      }}
    >
      <div className="card-title-row">
        <h1 style={{ color: titleColorMap, fontSize: titleSizeMap + "px" }}>
          {title}
        </h1>
        <div className="card-icons-container">
          {editCondition ? (
            <i className="fas fa-check" onClick={editDoneHandler}></i>
          ) : (
            <i className="fas fa-pen" onClick={editHandler}></i>
          )}

          <i className="far fa-copy" onClick={copyHandler}></i>
          {listOfCard.length === 1 ? (
            <i className="fas fa-trash disable"></i>
          ) : (
            <i className="fas fa-trash" onClick={deleteHandler}></i>
          )}
        </div>
      </div>
      <hr />
      <div className="card-text-row">
        <span style={{ color: bodyColorMap, fontSize: bodySizeMap + "px" }}>
          {text}
        </span>
      </div>
    </div>
  );
}

export default CustomBox;
