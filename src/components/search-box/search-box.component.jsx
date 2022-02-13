import React from 'react';

// Types
import { HANDLE_TEXT_CHANGE } from '../../redux/types'

// Redux
import { connect } from 'react-redux';

import './search-box.styles.css';

const SearchBox = ({ dispatch, text }) => {

    const handleTextChange = ev => {
        dispatch({ type: HANDLE_TEXT_CHANGE, payload: ev.target.value });
    }

    return(
        <div className='search-box'>
            <h2>Search Your Favorite Cocktail</h2>
            <input type='text' onChange={handleTextChange} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}


export default connect(mapStateToProps, null)(SearchBox);