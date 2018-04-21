import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/index'
import { NativeRouter } from 'react-router-native'
const store = configureStore();


const RNRedux = () => (
    <Provider store={store}>
    	<NativeRouter>
        <App />
        </NativeRouter>
    </Provider>
);
AppRegistry.registerComponent('library', () => RNRedux);
