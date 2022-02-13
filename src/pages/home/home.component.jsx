import React, { useEffect } from 'react';

// Types
import {GET_ONLOAD_DRINKS} from '../../redux/types';

// Components
import SearchBox from '../../components/search-box/search-box.component';
import CocktailList from '../../components/cocktail-list/cocktail-list.component';
// Redux
import { connect } from 'react-redux';

const Home = ({ dispatch, text }) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;

    useEffect(() => {
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_ONLOAD_DRINKS, payload: data.drinks}));
    }, [text]);

    return(
        <div>
            <SearchBox />
            <CocktailList />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(Home);