import React from "react";
import _ from "lodash";
import productList from "../../dataServices/dataService";

const ComparadiseContent = ({ context }) => {
  const activeId = Object.keys(context);
  const activeProducts = _.filter(productList, v =>
    _.includes(activeId, "" + v.id)
  );
  console.log(activeProducts);
  return (
    <React.Fragment>
      <div className="topic-header">
        {activeProducts.map(({ id, name, logo }) => (
          <div key={id}>
            <img src={logo} alt="" />
          </div>
        ))}
      </div>

      <div className="body-context">
        <div className="topic-block">
          <div className="topic--header">Servings starting from</div>
          {activeProducts.map(({ id, servings }) => (
            <div key={id}>{servings}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Free shipping</div>
          {activeProducts.map(({ id, shipping }) => (
            <div key={id}>{shipping}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Great for</div>
          {activeProducts.map(({ id, great }) => (
            <div key={id}>{great}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Recipes per week</div>
          {activeProducts.map(({ id, recipes }) => (
            <div key={id}>{recipes}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Added extras</div>
          {activeProducts.map(({ id, extras }) => (
            <div key={id}>{extras}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Recyclable packaging?</div>
          {activeProducts.map(({ id, recyclable }) => (
            <div key={id}>{recyclable}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Type of meal </div>
          {activeProducts.map(({ id, type_meal }) => (
            <div key={id}>{type_meal}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Prep time (minutes)</div>
          {activeProducts.map(({ id, prep_time }) => (
            <div key={id}>{prep_time}</div>
          ))}
        </div>

        <div className="topic-block">
          <div className="topic--header">Special offer </div>
          {activeProducts.map(({ id, offer }) => (
            <div key={id}>{offer}</div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComparadiseContent;
