import React from 'react';

import './cocktail-item.styles.css';

const CocktailItem = () => {
    return(
        <div className='cocktail-item'>
            <img />
            <div className='cocktail-item__details'>
                <h1>Item name</h1>
                <h3>Drink type</h3>
                <button>Details</button>
            </div>
        </div>
    )
}

export default CocktailItem;