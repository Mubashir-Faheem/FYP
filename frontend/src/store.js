// import {combineReducers, applyMiddleware} from 'redux';
import {createStore} from 'redux'
// import {configureStore}  from '@reduxjs/toolkit'
import {combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productDetailsReducer, productListReducer} from './reducers/ProductReducer'
import {seedListReducer,seedDetailsReducer} from './reducers/SeedReducer'
import {fertilizerListReducer,fertilizerDetailsReducer} from './reducers/FertilizerReducer'
import {CartReducer} from './reducers/CartReducer'

const cartItemsFromStorage=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    seedList:seedListReducer,
    seedDetails:seedDetailsReducer,
    fertilizerList:fertilizerListReducer,
    fertilizerDetails:fertilizerDetailsReducer,
    Cart:CartReducer

});
const initialState={
    // cart:{cartItems :"GardenMart" }
    cart:{cartItems:cartItemsFromStorage}
};
const middleware=[thunk];
 const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );



export default store;

// export default configureStore;
// export default @reduxjs/toolkit