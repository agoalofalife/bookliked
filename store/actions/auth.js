
import {ADD_TOKEN, REMOVE_TOKEN} from './../actions/constants'

export const addTokenAction  = (token) => (
    {
        type: types[ADD_TOKEN],
        token:token
    }
);

export const removeTokenAction  = () => (
    {
        type: types[REMOVE_TOKEN],
    }
);