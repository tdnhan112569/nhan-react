import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import ProductListReducer from './components/ProductList/ProductList.reducer'
import LoginReducer from './components/Login/Login.reducer'
import HeaderReducer from './components/Header/Header.reducer'
import ProductDetailReducer from './components/ProductDetail/ProductDetail.reducer'

const reducer = combineReducers({productRed : ProductListReducer, loginRed : LoginReducer, headerRed: HeaderReducer, productDetailReducer: ProductDetailReducer })
const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
