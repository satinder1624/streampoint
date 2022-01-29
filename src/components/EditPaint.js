import React, { useContext } from "react";
import { StoreContext } from "../store/store";
import "../styles/editPaint.css";
import { BlockPicker } from "react-color";
import Tippy from "@tippyjs/react";

function EditPaint() {
  const { titleSize, setTitleSize } = useContext(StoreContext);
  const { titleColor, setTitleColor } = useContext(StoreContext);
  const { bodySize, setBodySize } = useContext(StoreContext);
  const { bodyColor, setBodyColor } = useContext(StoreContext);
  const { pannelColor, setPannelColor } = useContext(StoreContext);
  const { cornerRadius, setCornerRadius } = useContext(StoreContext);
  
  return (
    <div className="editPaintContainer">
      {/* Title */}
      <div className="editPaint">
        <h1>Title</h1>
        <div className="editSize">
          <div className="size">
            <span>Size</span>
            <span>Color</span>
          </div>
          <div className="color">
            <input
              type="number"
              value={titleSize}
              onChange={(e) => setTitleSize(e.target.value)}
            />

            <Tippy
              interactive={true}
              placement={"bottom"}
              content={
                <BlockPicker
                  color={titleColor}
                  onChangeComplete={(color) => setTitleColor(color.hex)}
                />
              }
            >
              <span
                className="colorBox"
                style={{ backgroundColor: titleColor }}
              ></span>
            </Tippy>
          </div>
        </div>
      </div>
      <hr />
      {/* Body */}
      <div className="editPaint">
        <h1>Body</h1>
        <div className="editSize">
          <div className="size">
            <span>Size</span>
            <span>Color</span>
          </div>
          <div className="color">
            <input
              type="number"
              value={bodySize}
              onChange={(e) => setBodySize(e.target.value)}
            />
            <Tippy
              interactive={true}
              placement={"bottom"}
              content={
                <BlockPicker
                  color={bodyColor}
                  onChangeComplete={(color) => setBodyColor(color.hex)}
                />
              }
            >
              <span
                className="colorBox"
                style={{ backgroundColor: bodyColor }}
              ></span>
            </Tippy>
          </div>
        </div>
      </div>
      <hr />
      {/* Panel */}
      <div className="editPaint">
        <h1>Panel</h1>
        <div className="editSize">
          <div className="size">
            <span>Corner Radius</span>
            <span>Color</span>
          </div>
          <div className="color">
            <input
              type="number"
              value={cornerRadius}
              onChange={(e) => setCornerRadius(e.target.value)}
            />
            <Tippy
              interactive={true}
              placement={"bottom"}
              content={
                <BlockPicker
                  color={pannelColor}
                  onChangeComplete={(color) => setPannelColor(color.hex)}
                />
              }
            >
              <span
                className="colorBox"
                style={{ backgroundColor: pannelColor }}
              ></span>
            </Tippy>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default EditPaint;
