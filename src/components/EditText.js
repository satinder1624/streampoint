import React, { useContext } from "react";
import { StoreContext } from "../store/store";
import "../styles/editText.css";

function EditText() {
  const { titleText, setTitleText } = useContext(StoreContext);
  const { textArea, setTextArea } = useContext(StoreContext);
  return (
    <div className="editTextContainer">
      <div className="editTitleText editSection">
        <span>Title Text</span>
        <input
          type="text"
          placeholder="Enter Custom title"
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
        />
      </div>
      <div className="editCustomText editSection">
        <span>Body Text</span>
        <textarea
          placeholder="Enter Custom text"
          name=""
          id=""
          cols="30"
          rows="10"
          value={textArea}
          onChange={(e) =>setTextArea(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default EditText;
