import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            }); //returns an array with the length of whatever the value is of the given key in the ingredients object
        });

    // line 7- transform ingredients object from object into an array...returns ["salad", "cheese", "bacon", "meat"]
    // line 8- igKey will be "salad", and so on
    // line 9- returns an array with blank spots for the number(value) in the array... e.g, salad: 2 would be [ , ]...<< Array(ingredients["salad"] = Array(2)   really the length is the important thing here, since it's used by next map function
    // line 10- [ , ] (with "salad" as igKey) gets mapped with an index, so the key is "salad 1" and type is "salad" on first time through map, then "salad 1" key with "salad" type for another BurgerIngredient component
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;