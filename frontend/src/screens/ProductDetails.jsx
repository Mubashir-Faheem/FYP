import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
// import Product from "../products"
// import Product from "../products"
// import Product from "../../../backend/data/products"
import {Row,Col,ListGroup,Button,Image, ListGroupItem,Form} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import {listProductDetails} from '../actions/productActions'
import Loader from '../components/shared/loader'
import Message from '../components/shared/message'
import {useNavigate} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
// import history from 'react-router-dom'
// import  from 'react-router-dom'



const ProductDetails = () => {
        const [qty,setQty]=useState(1);
        let {id}=useParams();
        // let{price}=useParams();
       
        // const product=Product.find((p)=>p._id===id)
    const dispatch =useDispatch();
    const productDetails=useSelector(state =>state.productDetails)
    const{loading,error,product} =productDetails
    // const[product,setProduct]=useState([]);
useEffect(()=>{

   
    console.log("id",id)
    
    dispatch(listProductDetails(id))
},[dispatch]);
let history=useNavigate()


const addToCartHandler = ()=>{
 
    
     history(`/cart/${id}?qty=${qty}`)
    //  history(`/CartScreen/cart/:id?/${id}?qty=${qty}`)
}
// console.log("hello",addToCartHandler())

// console.log("hello",addToCartHandler)
// const addToCartHandler = () => {
//         history.push(`/cart/${id}?qty=${qty}`);
//       };
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
                <Row >
                 <Col md={5}>
                                
                <Card className="my-3 p-3 rounded" style={{width:'440px',height:'440px'}}>

            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
            <Card.Img  variant="top" style={{width:'400px',height:'400px'}} src={`../${product && product.image}` }  />
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
                    Price:Rs. {product &&product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        {product &&product.description}
                    </ListGroupItem>
                </ListGroup>
                </Card>
        
        </Col>
        <Col md={3} style={{marginTop:'15px'}}>
    
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{product &&product.countinstock > 0? "In Stock": "Out of Stock" }</Col>
                </Row>
                </ListGroupItem>
                
             {  product.countinstock > 0 &&(
                 <ListGroupItem>
                     <Row>
                         <Col>Qty
                         </Col>
                         <Form.Control as ="select" value={qty} onChange={(e)=> setQty(e.target.value)}>
                             {
                                 [...Array(product.countinstock).keys()].map((x)=>(
                                     <option key={x+1} value={x+1}>
                                         {x+1}

                                     </option>

                                 ))
                             }
                         </Form.Control>
                     </Row>
                 </ListGroupItem>
             )
             
    }
    {/* <LinkContainer to="/cart"> */}
                <ListGroupItem>
                    <Button id="btn" className="btn-block" type="button" to="/CartScreen" onClick={addToCartHandler} >Add to Cart </Button>
                    
                  
                </ListGroupItem>
                {/* </LinkContainer> */}
                
                
                
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


//   const addToCartHandler = () => {
//     history.push(`/cart/${match.params.id}?qty=${qty}`);
//   };
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
