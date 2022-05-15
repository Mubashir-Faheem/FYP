import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
// import Product from "../products"
// import Product from "../products"
// import Product from "../../../backend/data/products"
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import {listProductDetails} from '../actions/productActions'
import Loader from '../components/shared/loader'
import Message from '../components/shared/message'


    const ProductDetails = () => {
        let {id}=useParams();
        // const product=Product.find((p)=>p._id===id)
    const dispatch =useDispatch();
    const productDetails=useSelector(state =>state.productDetails)
    const{loading,error,product} =productDetails
    // const[product,setProduct]=useState([]);
useEffect(()=>{

    // let {id}=useParams();
    console.log("he",id)
    // const fetchProduct=async ({})=>{
    //     // const{data}=await axios.get(`/products:id/${match.id}`);
    //     const{data}=await axios.get(`/products/${id}`)
    //     setProduct(data);
    // };
    // fetchProduct()
    // console.log(product)
    // console.log("hello world",match.params.id)
    dispatch(listProductDetails(id))
},[dispatch]);
  
    return (
        <>
        
             {loading ? (
                <Loader/>
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                  
                <div>
                <Link to="/homescreen " className="btn btn-dark">
                    <i class="fas fa-arrow-left"></i> &nbsp; Go Back
            </Link>
                <Row>
                 <Col md={6}>
                                
                <Card className="my-3 p-3 rounded">

            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
            <Card.Img variant="top" src={`../${product && product.image}` }  />
            </Card> 
        </Col>
        
        <Col md={3}>
        <Card className="my-3 p-3 rounded">
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{product && product.name}</h3>
                </ListGroupItem>
    
                <ListGroupItem>
                    <Rating value={product && product.ratings}
                    text={`${product && product.numreviews} Reviews`}/>
    
                    
                </ListGroupItem>
                <ListGroupItem>
                    Price: {product &&product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        {product &&product.description}
                    </ListGroupItem>
                </ListGroup>
                </Card>
        
        </Col>
        <Col md={3}>
    
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{product &&product.countinstock > 0? "In Stock": "Out of Stock" }</Col>
                </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button id="btn" className="btn-block" type="button" to="/">Add to Cart </Button>
                    
                  
                </ListGroupItem>
                
        </Col>
    
    
                    </Row>
                
            </div>
              )}
            
             </>

        
        
        
    )
    
    
};

export default ProductDetails


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Rating from "../components/Rating";
// import { Link } from "react-router-dom";
// import { listProductDetails } from "../actions/productActions";

// import {
//   Row,
//   Col,
//   ListGroup,
//   Button,
//   Image,
//   ListGroupItem,
//   Form,
// } from "react-bootstrap";
// const ProductDetails = ({ match }) => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();
//   const productDetails = useSelector((state) => state.productDetails);
//   const { loading, error, product } = productDetails;

//   useEffect(() => {
      
//     dispatch(listProductDetails(match.params.id));
//   }, [dispatch,match]);


// //   const addToCartHandler = () => {
// //     history.push(`/cart/${match.params.id}?qty=${qty}`);
// //   };
//   return (
//     <>
//       <Link to="/" className="btn btn-light">
//         <i className="fas fa-arrow-left    "></i>
//         &nbsp; GO BACK
//       </Link>

//       <Row>
//         <Col md={6}>
//           <Image src={product.image} alt={product.name} fluid />
//           {/* <Image src={product && product.image} alt={product && product.name} fluid /> */}
//         </Col>
//         <Col md={3}>
//           <ListGroup variant="flush">
//             <ListGroupItem>
//               <h3>{product.name}</h3>
//             </ListGroupItem>
//             <ListGroupItem>
//               <Rating
//                 value={product.rating}
//                 text={`${product.numReviews} Reviews`}
//               />
//             </ListGroupItem>
//             <ListGroupItem>Price : ${product.price}</ListGroupItem>
//             <ListGroupItem>{product.description}</ListGroupItem>
//           </ListGroup>
//         </Col>
//         <Col md={3}>
//           <ListGroupItem>
//             <Row>
//               <Col>Status :</Col>
//               <Col>
//                 {product.countInStock > 0 ? "In Stock " : "out of stock"}
//               </Col>
//             </Row>
//           </ListGroupItem>
//           {product.countInStock > 0 && (
//             <ListGroupItem>
//               <Row>
//                 <Col>Qty</Col>
//                 <Form.Control
//                   as="select"
//                   value={qty}
//                   onChange={(e) => setQty(e.target.value)}
//                 >
//                   {[...Array(product.countInStock).keys()].map((x) => (
//                     <option key={x + 1} value={x + 1}>
//                       {x + 1}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Row>
//             </ListGroupItem>
//           )}
//           <ListGroupItem>
//             {/* <Button
//               className="btn-block"
//               type="button"
//               onClick={addToCartHandler}
//             >
//               Add to cart
//             </Button> */}
//           </ListGroupItem>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default ProductDetails;
