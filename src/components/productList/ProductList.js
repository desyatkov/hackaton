import React, { Component } from "react";
import productList from "../../dataServices/dataService";
import "./ProductList.css";
import ProductItem from "./ProductItem";
import _ from "lodash";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: productList,
      selected: {},
      countSelected: 0
    };
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  selectItem(el) {
    const selected = this.state.selected;
    selected[el.id] = !selected[el.id];
    this.setState({ selected: selected });
    const activeProducts = _.omitBy(this.state.selected, value => !value);
    const countSelected = _.size(activeProducts);
    this.props.onSelect3Prod(countSelected >= 2);
    this.props.activeProducts(activeProducts);
    this.setState({ countSelected: countSelected });

    console.log(this.state.selected);
  }

  renderItem(item, idx) {
    const countSelected = this.state.selected;

    const classBox = ["elements--box--item"];

    const disableEl =
      this.state.countSelected >= 3 && !this.state.selected[item.id];

    if (this.state.selected[item.id]) classBox.push("active");
    if (disableEl) classBox.push("disabled");

    const onClickHandler = this.selectItem.bind(this, item);
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        className={classBox.join(" ")}
        onClickHandler={disableEl ? null : onClickHandler}
        idx={idx}
        logo={item.logo}
      />
    );
  }

  render() {
    return (
      <div className="wrapper--items">
        <div className="elements--box">
          {this.state.data.map(this.renderItem)}
        </div>
      </div>
    );
  }
}

export default ProductList;
