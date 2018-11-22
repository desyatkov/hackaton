import React from "react";

const ProductItem = ({ id, className, onClickHandler, idx, logo }) => {
  return (
    <div id={id} className={className} onClick={onClickHandler}>
      <div className="item-content-wrap">
        <div className="itemNumber">
          <span>{idx + 1}</span>
        </div>
        <div className="item-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
