import React, { Component } from "react";
import "./Burger.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default class Burger extends Component {
  render() {
    const { ingredients } = this.props;
    const transformedIngredients = Object.keys(ingredients).map(igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    });

    return (
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}
