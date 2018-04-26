
import {ADD_TOKEN, REMOVE_TOKEN,LOAD_AUTH} from './../actions/constants'

export const addTokenAction  = (token) => (
    {
        type: ADD_TOKEN,
        token:token,
        load:false,
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


export const signInAction = (login, password) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(addTokenAction('token'));
                resolve()
            }, 1)
        })

    }
};