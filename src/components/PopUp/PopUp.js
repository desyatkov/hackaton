import React, { Component } from "react";
import ProductList from "../productList/ProductList";
import MainBtn from "../MainBtn/MainBtn";
import PopUpContent from "./PopUpContent";
import PopUpComparadise from "../PopUpComparadise/PopUpComparadise";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      visibleCompareBtn: false,
      visibleSecondStep: false,
      activeProducts: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state, props) => {
      return {
        visible: nextProps.visible
      };
    });
  }

  handleSelect = value => {
    this.setState(() => {
      return { visibleCompareBtn: value };
    });
  };

  handleStepTwoClick = () => {
    this.setState(state => {
      return { visibleSecondStep: true };
    });
  };

  handleStepTwoCloseClick = () => {
    this.setState(state => {
      return { visibleSecondStep: false };
    });
  };

  render() {
    const classBox = ["popup--comparion"];
    if (this.state.visible) {
      classBox.push("show");
    }

    return (
      <React.Fragment>
        <PopUpContent
          classBox={classBox.join(" ")}
          title="Choose up to 3 options"
          handleClick={this.props.handleClick}
        >
          <ProductList
            onSelect3Prod={this.handleSelect}
            activeProducts={activeProducts => this.setState({ activeProducts })}
          />
          <MainBtn
            label="Let’s Compare"
            handleClick={this.handleStepTwoClick}
            visible={this.state.visibleCompareBtn}
          />
        </PopUpContent>
        <PopUpComparadise
          visible={this.state.visibleSecondStep}
          handleCloseClick={this.handleStepTwoCloseClick}
          activeProducts={this.state.activeProducts}
        />
      </React.Fragment>
    );
  }
}

export default PopUp;
