
import {ADD_TOKEN, REMOVE_TOKEN} from './../actions/constants'

export const addTokenAction  = (token) => (
    {
        type: ADD_TOKEN,
        token:token
    }
);

export const removeTokenAction  = () => (
    {
        type: REMOVE_TOKEN,
    }
);