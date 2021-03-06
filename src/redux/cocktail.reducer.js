import { GET_ONLOAD_DRINKS, HANDLE_TEXT_CHANGE } from './types';

// Reducer
const reducer = (state, action) => {
    if(action.type === GET_ONLOAD_DRINKS){
        return {
            ...state,
            drinks: (action.payload) ? action.payload : []
        }
    }

    if(action.type === HANDLE_TEXT_CHANGE) {
        return {
            ...state,
            text: action.payload
        }
    }

    return state;
}

export default reducer;