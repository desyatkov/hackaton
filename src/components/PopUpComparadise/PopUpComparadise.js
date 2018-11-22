import React, { Component } from "react";
import PopUpContent from "../PopUp/PopUpContent";
import ComparadiseContent from "./ComparadiseContent";

class PopUpComparadise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("step2");
    this.setState((state, props) => {
      return {
        visible: nextProps.visible
      };
    });
  }

  render() {
    const classBox = ["popup--comparion", "step2"];
    if (this.state.visible) {
      classBox.push("show");
    }

    return (
      <PopUpContent
        classBox={classBox.join(" ")}
        title="Compare your options"
        handleClick={this.props.handleCloseClick}
      >
        <ComparadiseContent context={this.props.activeProducts} />
      </PopUpContent>
    );
  }
}

export default PopUpComparadise;
