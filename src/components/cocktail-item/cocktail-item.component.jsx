import React from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

import './cocktail-item.styles.css';

const CocktailItem = ({ cocktail = {} }) => {
    const { strDrink, strCategory, strGlass, strDrinkThumb, idDrink } = cocktail;

    return(
        <div className='cocktail-item'>
            <img src={strDrinkThumb} alt={strCategory} />
            <div className='cocktail-item__details'>
                <h1>{ strDrink }</h1>
                <h3>{ strGlass }</h3>
                <Link to={`/cocktail/${idDrink}`} className='btn'>
                    Details
                </Link>
            </div>
        </div>
    )
}

export default CocktailItem;