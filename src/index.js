import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';

// configure store contains all the reducer functions 
const store = configureStore({
    reducer: {
        // users: ,

    }
})
// rendering the provider store with configure store
ReactDom.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));