import { GET_ONLOAD_DRINKS } from './types';

// Reducer
const reducer = (state, action) => {
    if(action.type === GET_ONLOAD_DRINKS){
        return {
            ...state,
            drinks: action.payload
        }
    }

    return state;
}

export default reducer;