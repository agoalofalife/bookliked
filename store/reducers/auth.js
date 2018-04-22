import {ADD_TOKEN, REMOVE_TOKEN} from './../actions/constants'

const storeAuth = {
 token:null,
 isAuth:true,
};

export default (state = storeAuth, action) => {
    switch (action.type) {
        case ADD_TOKEN:
        	return {
            isAuth:action.isAuth,
    		token: action.token
        	}
        case REMOVE_TOKEN:
            return {...state,
    		token: null
        	}
        default:
            return state;
    }
};