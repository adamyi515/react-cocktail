import React from 'react';

import './cocktail-list.styles.css';

// Components
import CocktailItem from '../cocktail-item/cocktail-item.component';

// Redux and react-redux
import { connect } from 'react-redux';

const CocktailList = ({ cocktails }) => {
    
    return(
        <div className='cocktail-list'>
            <h1 className='align-center'>Cocktails</h1>
            <div className='cocktail-list__item-container'>
                {
                    cocktails.map(cocktail => <CocktailItem key={cocktail.dateModified} cocktail={cocktail} />)
                }
            </div>
        </div>
    )
}

const mapPropsToState = state => {
    return {
        cocktails: state.drinks
    };
}

export default connect(mapPropsToState)(CocktailList);