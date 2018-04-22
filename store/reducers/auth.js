import {ADD_TOKEN, REMOVE_TOKEN} from './../actions/constants'

const storeAuth = {
 token:null,
 isAuth:false,
};

export default (state = storeAuth, action) => {
    switch (action.type) {
        case ADD_TOKEN:
        	return {
            isAuth:true,
    		token: action.isAuth
        	}
        case REMOVE_TOKEN:
            return {...state,
    		token: null
        	}
        default:
            return state;
    }
};