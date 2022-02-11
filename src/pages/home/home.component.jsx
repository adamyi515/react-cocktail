import React from 'react';

// Components
import SearchBox from '../../components/search-box/search-box.component';
import CocktailList from '../../components/cocktail-list/cocktail-list.component';

const Home = () => {
    return(
        <div>
            <SearchBox />
            <CocktailList />
        </div>
    )
}

export default Home;