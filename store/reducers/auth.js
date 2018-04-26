import {ADD_TOKEN, REMOVE_TOKEN, LOAD_AUTH} from './../actions/constants'

const storeDefault = {
 token:null,
 isAuth:false,
 load:false
};

export default (state = storeDefault, action) => {
    switch (action.type) {
        case ADD_TOKEN:
        	return {
            load:false,
            isAuth:true,
    		token: action.token,
        	};
        case REMOVE_TOKEN:
            return {
            load:false,
    		token: null,
            isAuth:false,
        	};
        case LOAD_AUTH:
            return {
                ...state,
                load:action.load
            };
        default:
            return state;
    }
};