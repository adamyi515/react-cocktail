import React, { useEffect } from 'react';

// Types
import {GET_ONLOAD_DRINKS} from '../../redux/types';

// Components
import SearchBox from '../../components/search-box/search-box.component';
import CocktailList from '../../components/cocktail-list/cocktail-list.component';
// Redux
import { connect } from 'react-redux';

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`;

const Home = ({ dispatch }) => {

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_ONLOAD_DRINKS, payload: data.drinks}));
    }, []);

    return(
        <div>
            <SearchBox />
            <CocktailList />
        </div>
    )
}

export default connect()(Home);