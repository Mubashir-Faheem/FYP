
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



import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Products from "./../products"
// import Products from "./../../../backend/data/products"
import ProductScreen from './ProductScreen' 
import {listProducts} from '../actions/productActions'

//  function HomeScreen(){
    
    // // const [prod,setProducts]=UseState([]);


    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${count} times`;
    //     console.log("dsfsdfsd");
    //   });


const HomeScreen=()=>{
    // const [Products,setProducts]=useState([]);
    const dispatch=useDispatch();
    const productList=useSelector(state =>state.productList);
    const {loading,error,products}=productList;
    
    useEffect(()=>{
        dispatch(listProducts());

        // const fetchProducts=async () => {
        //     // const {data}=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
        //     const resp=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
        //     // const resp1=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/seeds');
        //     console.log(resp);
        //     setProducts(resp.data);
        //     // setProducts(resp1.data)
        // }
        // fetchProducts();

    },[]);
    

//}
    return (
        <>
        {
            loading ? <h2>Loading </h2> :error ?  <h2>{error}</h2>:
            <Row>

          

                {
                    
                    products.map(product =>(
                       <Col key={product._id} md={4}>
                       <h3>
                           <ProductScreen product={product}/>
                       </h3>
                       </Col>
                   ))
                }
            </Row>
         } 

        </>
    )
}

export default HomeScreen
