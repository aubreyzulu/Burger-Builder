import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerReducer from './store/reducers/burgerBuilderReducer';
import thunk from 'redux-thunk';
import orderReducer from './store/reducers/orderReducer';

const rootReducer = combineReducers({ orderReducer, burgerReducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
console.log(thunk)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
