import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

import './cocktail-item-detail.styles.css';

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const CocktailItemDetail = () => {
   
    const { id } = useParams();
    const [drink, setDrink] = useState(null);

    useEffect(() => {
        async function getDrink() {
            try{
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                console.log(data.drinks[0]);
                if(data.drinks){
                    const { idDrink, strDrink, strGlass, strDrinkThumb, strCategory, strAlcoholic, strInstructions } = data.drinks[0];
                    const newDrink = {
                        idDrink, strDrink, strGlass, strDrinkThumb, strCategory, strAlcoholic, strInstructions
                    }
                    setDrink(newDrink);
                } else {
                    setDrink(null);
                }
            } catch(err){
                console.log(err);
            }
        } // END getDrink()

        getDrink();
    }, []);

    if(!drink){
        return(
            <h1 className='align-center'>Loading...</h1>
        )
    }
    const { idDrink, strDrink, strGlass, strDrinkThumb, strCategory, strAlcoholic, strInstructions} = drink;

    return(
        <div className='cocktail-item-detail'>
            <h1 className='align-center'>{strDrink}</h1>
            <div className='cocktail-item-detail__container'>
                <img src={strDrinkThumb} />
                <div className='cocktail-item-detail__info'>
                    <p>Name: {strDrink}</p>
                    <p>Category: {strCategory}</p>
                    <p>Info: {strAlcoholic}</p>
                    <p>Glass: {strGlass}</p>
                    <p>Instructions: {strInstructions}</p>
                </div>
            </div>
        </div>
    )
}


export default CocktailItemDetail;