import axios from 'axios'

//action suite

//ACTION TYPES
export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

//ACTION CREATORS
export const fetchCharacters = () => {
    return dispatch => {
        dispatch({ type: FETCH_CHARACTERS_START})

        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(res => {
                console.log(res.data.results)
                dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
            })
            .catch(err => console.log(err))
            
    }
}