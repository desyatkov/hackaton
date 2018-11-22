import React from "react";
import "./mainBtn.css";

const MainBtn = ({ handleClick, label, visible = true }) => {
  const classBox = ["compare-btn"];
  if (!visible) classBox.push("hidden");

  return (
    <div className={classBox.join(" ")} onClick={handleClick}>
      <span className="compare-btn-label">{label}</span>
    </div>
  );
};

export default MainBtn;
