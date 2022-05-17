// import axios from "axios";
//

// // export const addtoCart=(id,qty)=> async (dispatch,getState)=>{
// //     const {data}=await axios.get(`./api/products/${id}`)
// //     dispatch({
// //         type:CART_ADD_ITEM,
// //         payload:{
// //             product:data._id,
// //             name:data.name,
// //             image:data.image,
// //             price:data.price,
// //             countInStock:data.countInStock,
// //             qty
// //         }
// //     })

//     // localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItem))

// // }
// export const addToCart = (id, qty) => async (dispatch, getState) => {
//     const { data } = await axios.get(`https://mubashir-garden-mart.herokuapp.com/api/products/${id}`);
//     dispatch({
//       type: CART_ADD_ITEM,
//       payload: {
//         product: data._id,
//         name: data.name,
//         image: data.image,
//         price: data.price,
//         countInStock: data.countInStock,
//         qty,
//       },
//     });
//     console.log("new Data",data)
  
//     localStorage.setItem("cartItems", JSON.stringify(data));
    
//     // localStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
//     // console.log("cart",JSON.stringify(getState().cartItems));
    
//     // localStorage.setItem("cartItems", JSON.stringify(getState().cartItems));
    
//   };


// export const removeFromCart = (id) => (dispatch, getState) => {
//     dispatch({
//       type: CART_REMOVE_ITEM,
//       payload: id,
//     });
// }

import axios from 'axios'
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from '../constants/cartConstant'


export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://mubashir-garden-mart.herokuapp.com/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItem));
};

