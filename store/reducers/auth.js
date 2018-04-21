import {ADD_TOKEN, REMOVE_TOKEN} from './../actions/constants'

export const auth = (state = {token:null}, action) => {
    switch (action.type) {
        case ADD_TOKEN:
            return { token: action.token};
        case REMOVE_TOKEN:
            return {token:null};
        default:
            return state;
    }
};