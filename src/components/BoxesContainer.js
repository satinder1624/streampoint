import React, { useContext } from "react";
import "../styles/boxesContainer.css";
import CustomBox from "./CustomBox";
import { StoreContext } from "../store/store";
import EditText from "./EditText";
import EditPaint from "./EditPaint";

function BoxesContainer() {
  const { listOfCard } = useContext(StoreContext);
  const { openOrClose } = useContext(StoreContext);
  const { editLine, setEditLine } = useContext(StoreContext);

  const bottomLineHandler = () => {
    setEditLine(!editLine);
  };

  return (
    <div className="container">
      <div className="conatiner-all-cards">
        {listOfCard.map((e, i) => (
          <CustomBox
            key={i}
            id={i}
            title={e.title}
            text={e.text}
            editCondition={e.openOrClose}
            titleSizeMap={e.titleSize}
            titleColorMap={e.titleColor}
            bodySizeMap={e.bodySize}
            bodyColorMap={e.bodyColor}
            cornerRadiusMap={e.cornerRadius}
            pannelColorMap={e.pannelColor}
          />
        ))}
      </div>

      <div className={`edit ${openOrClose ? "editOpen" : ""}`}>
        <div className="optionsTab">
          <div className={`${editLine ? "" : "editLineFirst"}`}>
            <i className="fas fa-cog" onClick={bottomLineHandler}></i>
          </div>
          <div className={`${editLine ? "editLineSecond" : ""}`}>
            <i className="fas fa-paint-roller" onClick={bottomLineHandler}></i>
          </div>
        </div>
        <div className="editArea">
          {!editLine ? <EditText /> : <EditPaint />}
        </div>
      </div>
    </div>
  );
}

export default BoxesContainer;
