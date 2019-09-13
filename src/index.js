import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);//?

ReactDOM.render(
    //<App />, document.getElementById('root') //两个auguments，一个是jsx，另一个是root element；
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
