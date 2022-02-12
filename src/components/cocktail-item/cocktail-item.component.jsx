import React from 'react';

import './cocktail-item.styles.css';

const CocktailItem = ({ cocktail = {} }) => {
    const { strDrink, strCategory, strGlass, strDrinkThumb } = cocktail;

    return(
        <div className='cocktail-item'>
            <img src={strDrinkThumb} alt={strCategory} />
            <div className='cocktail-item__details'>
                <h1>{ strDrink }</h1>
                <h3>{ strGlass }</h3>
                <button className='btn'>Details</button>
            </div>
        </div>
    )
}

export default CocktailItem;