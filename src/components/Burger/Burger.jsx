import React, { Component } from "react";
import "./Burger.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default class Burger extends Component {
  render() {
    const { ingredients } = this.props;
    let transformedIngredients = Object.keys(ingredients)
      .map(igKey => {
        return [...Array(ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add some ingredients</p>;
    }

    return (
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}
