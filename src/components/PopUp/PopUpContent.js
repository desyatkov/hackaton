import React from "react";
import "./popup.css";

const PopUpContent = ({ classBox, title, handleClick, children }) => {
  return (
    <div className={classBox}>
      <div className="header">
        <div className="header-label">{title}</div>
        <div className="close-popup" onClick={handleClick}>
          X
        </div>
      </div>
      {children}
    </div>
  );
};

export default PopUpContent;
