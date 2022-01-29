import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/userReducer';

import App from './App';

// configure store contains all the reducer functions 
// note: reducers should be passed on the primary reducer store
const store = configureStore({
    reducer: {
        user: userReducer
    }
})
// rendering the provider store with configure store
ReactDom.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));