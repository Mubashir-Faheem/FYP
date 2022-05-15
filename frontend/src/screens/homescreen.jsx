
// import React, {useState,useEffect} from 'react';
// import axios from 'axios'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Products from "./../products"
// // import Product from "./../../../backend/data/products"
// import ProductScreen from './ProductScreen'




// //  function HomeScreen(){
    
//     // // const [prod,setProducts]=UseState([]);


//     // useEffect(() => {
//     //     // Update the document title using the browser API
//     //     // document.title = `You clicked ${count} times`;
//     //     console.log("dsfsdfsd");
//     //   });

//     //displaying products on homescreen from backend
// const HomeScreen=()=>{
//     const [Products,setProducts]=useState([]);
//     useEffect(()=>{
//         const fetchProducts=async () => {
//             // const {data}=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
//             const resp=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
//             console.log(resp);
//             setProducts(resp.data);
//         }
//         fetchProducts();
//     },[]);
// }


// export default HomeScreen



// import React, {useState,useEffect} from 'react';
// import {useDispatch,useSelector} from 'react-redux';
// // import axios from 'axios'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// // import Products from "./../products"
// // import Products from "./../../../backend/data/products"
// import ProductScreen from './ProductScreen' 
// import {listProducts} from '../actions/productActions'
// import {productListReducer} from "../reducers/ProductReducer"

// //  function HomeScreen(){
    
//     // // const [prod,setProducts]=UseState([]);


//     // useEffect(() => {
//     //     // Update the document title using the browser API
//     //     // document.title = `You clicked ${count} times`;
//     //     console.log("dsfsdfsd");
//     //   });


// const HomeScreen=()=>{
//     // const [Products,setProducts]=useState([]);
//     const dispatch=useDispatch();
//     const productList=useSelector(state =>state.productList);
//     const {loading,error,products}=productList;
    
    
//     useEffect(()=>{
//         dispatch(listProducts());

//         // const fetchProducts=async () => {
//         //     // const {data}=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
//         //     const resp=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
//         //     // const resp1=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/seeds');
//         //     console.log(resp);
//         //     setProducts(resp.data);
//         //     // setProducts(resp1.data)
//         // }
//         // fetchProducts();
//         // console.log(listProducts)
//         // const {p}=listProducts
//         // console.log(p)

//     },[dispatch]) ;
//     // const Products=[];
//     console.log(products)
    

// //}
//     return (
//         <>
//          {
//                 loading ? <h2>Loading </h2> : error ?  <h2>{error}</h2>:
            
//             <Row>
                

          

//             { products.map((product) =>(
//                    <Col key={product._id} md={4}>
//                    <h3>
//                        <ProductScreen product={product}/>
//                    </h3>
//                    </Col>
//                ))
//             }
//             </Row>
// }
         

//         </>
//     )
// }

// export default HomeScreen







import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/loader";
import Message from "../components/shared/message";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  console.log(products)

  // let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });


  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        
        <Row>
          {
          products.map((product) => (
            
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}



    </>
  );
};

export default HomeScreen;
