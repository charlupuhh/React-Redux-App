import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from '../actions'

const initialState = {
    isLoading: false,
    characters: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_START:
            return{
                ...state,
                isLoading:true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                characters: action.payload,
                error: ''
            }
        default:
            return state;
    }
}