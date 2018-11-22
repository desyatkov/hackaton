import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PopUp from "./components/PopUp/PopUp";
import MainBtn from "./components/MainBtn/MainBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visibleComparePopup: false
    };
  }

  handleClick() {
    this.setState(() => {
      return {
        visibleComparePopup: !this.state.visibleComparePopup
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <MainBtn label="Tap To Compare" handleClick={this.handleClick} />
        <PopUp
          visible={this.state.visibleComparePopup}
          handleClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
}

const root = document.createElement("div");
root.setAttribute("id", "root");
document.getElementsByTagName("body")[0].appendChild(root);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
