import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 2,
      bacon: 1,
      cheese: 1
    }
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}
