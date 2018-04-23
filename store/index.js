import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {
    AsyncStorage,
} from 'react-native';

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    // check is valid token
    if (store.getState().auth.token) {
        // AsyncStorage.setItem('token', store.getState().auth.token);
    }
});

export default () => store;