
import {ADD_TOKEN, REMOVE_TOKEN,LOAD_AUTH} from './../actions/constants'

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

export const loadAuthAction  = () => (
    {
        type: LOAD_AUTH,
        load:true
    }
);

export const isNotLoadAuthAction  = () => (
    {
        type: LOAD_AUTH,
        load:false
    }
);