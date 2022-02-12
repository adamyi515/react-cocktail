import { createStore } from 'redux';
import reducer from './cocktail.reducer';

const initialState = {
    drinks: [],
    isLoading: false
}

const store = createStore(reducer, initialState);

export default store;