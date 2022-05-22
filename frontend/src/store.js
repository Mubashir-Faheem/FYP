// import {combineReducers, applyMiddleware} from 'redux';
import {createStore} from 'redux'
// import {configureStore}  from '@reduxjs/toolkit'
import {combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productDetailsReducer, productListReducer} from './reducers/ProductReducer'
import {rentingListReducer,rentingDetailsReducer} from './reducers/RentingReducer'
import {seedListReducer,seedDetailsReducer} from './reducers/SeedReducer'
import {fertilizerListReducer,fertilizerDetailsReducer} from './reducers/FertilizerReducer'
import {cartReducer} from './reducers/CartReducer'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
  } from "./reducers/OrderReducer"
  import {userLoginReducer,userRegisterReducer,userDetailsReducer,userListReducer,userUpdateProfileReducer,userDeleteReducer, userUpdateReducer} from './reducers/UserReducers'


const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
: {};

const userInfoFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    seedList:seedListReducer,
    seedDetails:seedDetailsReducer,
    fertilizerList:fertilizerListReducer,
    fertilizerDetails:fertilizerDetailsReducer,
    rentingList:rentingListReducer,
    rentingDetails:rentingDetailsReducer,
    cart:cartReducer,
    userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList:userListReducer,
  userDelete:userDeleteReducer,
  userUpdate:userUpdateReducer,
    orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList:orderListMyReducer,
  

});
const initialState={
    // cart:{cartItems :'GardenMart'}
    cart:{cartItems:cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
},
userLogin: { userInfo: userInfoFromStorage },}

const middleware=[thunk];
 const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );



export default store;

// export default configureStore;
// export default @reduxjs/toolkit