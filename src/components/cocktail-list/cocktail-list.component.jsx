import React from 'react';

import './cocktail-list.styles.css';

// Components
import CocktailItem from '../cocktail-item/cocktail-item.component';

const CocktailList = () => {
    return(
        <div className='cocktail-list'>
            <h1>Cocktails</h1>
            <div className='cocktail-list__item-container'>
                <CocktailItem />
            </div>
        </div>
    )
}

export default CocktailList;