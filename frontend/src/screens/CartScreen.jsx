// import React,{useEffect} from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import {Row,Col,Button,Form,Card,ListGroup,ListGroupItem,Image} from 'react-bootstrap'
// import {addToCart,removeFromCart} from '../actions/cartAction'
// import { useParams ,useSearchParams,Link} from 'react-router-dom'
// import Message from '../components/shared/message'
// // import {useSearchParams} from 'react-router-dom'
// // import {} from '../actions/cartAction'

// const CartScreen = (location) => {
//     let{id}=useParams()
//     // console.log(""qty)
    
// //   const productId=match.params.id
//   const qty=location.search
// const val = location.search ? Number(location.search.split("=")[1]) : 1;

// const dispatch=useDispatch();
// console.log("ok",qty);
// console.log(id);

// const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };
// //   const checkout = () => {
// //     history.push("/login?redirect=shipping");
// //   };

// useEffect(()=>{
//     if(id){
//         dispatch(addToCart(id,qty))
//     }
// }
// ,[dispatch,id,qty]
// )
// const cart=useSelector(state =>state.name)
// // const{cartItems}=cart
// // console.log("e",cart)
  
//     return (
//         <div>Hello</div>
// //   <>
// //         <Row>
// //           <Col md={8}>
// //             <h1>Shopping Cart</h1>
// //             {/* {cartItems.length === 0 ? (
// //               <Message>
// //                 Your Cart is Empty !<Link to="/">Go Back</Link>
// //               </Message>
// //             )  */}
// //             : (
// //               <ListGroup variant="flush">
// //                 {cartItems.map((item) => (
// //                   <ListGroupItem>
// //                     <Row>
// //                       <Col md={2}>
// //                         <Image src={item.image} alt={item.name} fluid rounded />
// //                       </Col>
// //                       <Col md={3}>
// //                         <Link to={`/product/${item.product}`}>{item.name}</Link>
// //                       </Col>
// //                       <Col md={2}>${item.price}</Col>
// //                       <Col md={2}>
// //                         <Form.Control
// //                           as="select"
// //                           value={item.qty}
// //                           onChange={(e) =>
// //                             dispatch(
// //                               addToCart(item.product, Number(e.target.value))
// //                             )
// //                           }
// //                         >
// //                           {[...Array(item.countInStock).keys()].map((x) => (
// //                             <option key={x + 1} value={x + 1}>
// //                               {x + 1}
// //                             </option>
// //                           ))}
// //                         </Form.Control>
// //                         <Button
// //                           type="button"
// //                           variant="light"
// //                           onClick={() => removeFromCartHandler(item.product)}
// //                         >
// //                           <i
// //                             className="fa fa-trash text-danger"
// //                             aria-hidden="true"
// //                           ></i>
// //                         </Button>
// //                       </Col>
// //                     </Row>
// //                   </ListGroupItem>
// //                 ))
// //                 }
// //               </ListGroup>
// //             {/* )} */}
// //           </Col>
// //           <Col md={4}>
// //             <Card>
// //               <ListGroup variant="flush">
// //                 <ListGroupItem>
// //                   {/* <h2>
// //                     subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
// //                     ) items
// //                   </h2> */}
// //                   $
// //                   {/* {cartItems
// //                     .reduce((acc, item) => acc + item.qty * item.price, 0)
// //                     .toFixed(2)} */}
// //                 </ListGroupItem>
// //                 {/* <Button
// //                   type="button"
// //                   className="btn-block"
// //                   disabled={cartItems.length === 0}
// //                   onClick={checkout}
// //                 >
// //                   Proceed to checkOut
// //                 </Button> */}
// //               </ListGroup>
// //             </Card>
// //           </Col>
// //         </Row>
//     //   </>
//     );
//   };
  
  


// export default CartScreen



// import React,{useEffect} from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   Form,
//   Button,
//   Card,
//   Image,
//   ListGroup,
//   ListGroupItem,
  
// } from "react-bootstrap";
// import {addToCart} from '../actions/cartAction'
// import {useParams,useSearchParams} from 'react-router-dom'
// // import {ReactDom} from 'react-dom'

// const CartScreen = () => {
//   let{id}=useParams() 
//   console.log("id",id)
//   // const qty=location.search
//   // console.log(qty)
//   let [searchParams]=useSearchParams()
//   const qty=searchParams.get('qty')
//   console.log("quantity",qty)

//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   if (id) {
//   //     dispatch(addToCart(id, qty));
//   //   }
//   // }, [dispatch, id, qty]);


//   return (
//     <h1>Cart</h1>
    
//   )
  
// }

// export default CartScreen

import React, { useState } from 'react';
import {
  // View,
  // Text,
  Header,
  CartCard,
  // Dimensions,
  Image,
  Form,Row,Col,Card,ListGroup,ListGroupItem
  // TouchableOpacity,
  // Icon
  
} from 'react-bootstrap';
import {FaBeer}  from 'react-icons/fa';
import {addToCart} from '../actions/cartAction'
import {useDispatch,useSelector} from 'react-redux'
import Rating from '../components/Rating'

// var { width } = Dimensions.get("window")
// import Icon from '';
// import Seprator from './components/Separator';
import {useParams,useSearchParams,params,Link} from 'react-router-dom'


const CartScreen=()=>{
  
  
    let{id}=useParams() 
    console.log("id",id)
    // let [searchParams]=useSearchParams()
    // const qty=searchParams.get('qty')
    const [qty,setQty]=useState(1);
    // let {price}=useParams()
    // console.log(price)
    // const qty=location.search
    // console.log(qty)
    
    console.log("quantity ",qty)
    // console.log("quantity",qty)
    const dispatch =useDispatch();
    dispatch(addToCart(id))
    const productDetails=useSelector(state =>state.productDetails)
    const{cartItems,product,item} =productDetails

   const removeFromCartHandler=({id})=>{
      console.log("remove")

    }


  // const plant = route.params;
  // const totalprice= parseInt(plant.price)+100
  // console.log(price)
    return (
      // <h1>hello</h1>
      <>
      <Row>
      <div>
        
                <Link to="/homescreen " className="btn btn-dark">
                    <i class="fas fa-arrow-left"></i> &nbsp; Go Back
            </Link>
        
                 <Col md={6}>
                                
                <Card className="my-3 p-3 rounded">

            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
            <Card.Img variant="top" src={`../${product && product.image}` }  />
            </Card> 
        </Col>
        <Row>
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
                    <ListGroupItem>
                        {/* Qty:{qty} */}
                    </ListGroupItem>
                    {/* <button 
                    type="button" variant="light" onclick={()=>removeFromCartHandler({id})}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                       </button> */}

                       {  product.countinstock > 0 &&(
                 <ListGroupItem>
                     <Row>
                         <Col>Qty
                         </Col>
                         <Form.Control as ="select" value={qty} 
                         onChange={(e)=> 
                          setQty(e.target.value)
                          }
                          >
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
                    
                    
                
    
                </ListGroup>
                </Card>
                </Col>
                <Col md={4} >
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroupItem>
                        <h2>Subtotal Products 
                           {/* ({cartItems.reduce((acc,item)=>acc+{qty})}) */}
                            </h2>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>

                </Col>
                </Row>
                </div>
                </Row>
                
                
    </>
  
         
  //     <div style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
  //     <div style={{height:20}} />
  //     <input style={{fontSize:28, color:"#00B761", paddingTop:20}}>Cart </input>
  //     <div style={{}} />

  //     <div style={{flex:1}}>

  //       <div style={{margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10, paddingTop:20}}>
  //         <Image resizeMode={"contain"}  src={plant.image} />
          
  //         <div style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
  //           <div>
  //             <input style={{fontWeight:"bold", fontSize:20}}>{plant.name}</input>
  //           </div>
  //           <div style={{flexDirection:'row',justifyContent:'space-between'}}>
  //             <input style={{fontWeight:'bold',color:"black",fontSize:20}}>{plant.price}</input>
  //             <div style={{flexDirection:'row', alignItems:'center'}}>
  //               {/* <TouchableOpacity> */}
  //                 <FaBeer name="ios-remove-circle" size={30} color={"#00B761"} />
  //               {/* </TouchableOpacity> */}
  //               <input style={{paddingHorizontal:8, fontWeight:'bold'}}>5</input>
  //               {/* <TouchableOpacity> */}
  //                 <FaBeer name="ios-add-circle" size={30} color={"#00B761"} />
  //               {/* </TouchableOpacity> */}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     <div style={{alignItems: 'center',}}>
  //       <input style={{fontSize:28, color:"#00B761", paddingTop:20}}>Review Your Bill</input>
  //     </div>
      
  //     <div style={{ justifyContent:'space-between',flexDirection:'row'}}>
  //       <input style={{fontSize:20, color:"black", paddingTop:10,paddingLeft:15}}> Product Price </input>
  //       <input style={{fontSize:20, color:"black", paddingTop:10,paddingRight:15}}> {plant.price} </input>
  //     </div>
  //     <div style={{justifyContent:'space-between',flexDirection:'row' , paddingTop:10}}>
  //       <input style={{fontSize:20, color:"black", paddingTop:10,paddingLeft:15}}> Shipping </input>
  //       <input style={{fontSize:20, color:"black", paddingTop:10,paddingRight:15}}> 100 </input>
  //     </div>
  //     <div style={{justifyContent:'space-between',flexDirection:'row' , paddingTop:10}}>
  //       <input style={{fontSize:20, color:"black", paddingTop:10,paddingLeft:15}}> Total </input>
  //       <input style={{fontSize:20, color:"black", paddingTop:10,paddingRight:15}}> {totalprice} </input>
  //     </div>
  //     </div>

  //     <div style={{height:10}} />

  //   {/* <TouchableOpacity style={{
  //       backgroundColor:"#00B761",
  //       width:width-30,
  //       alignItems:'center',
  //       padding:10,
  //       borderRadius:5
  //     }}  onPress={() => {
  //       navigation.navigate('ProductStack',{
  //         screen: 'CHECKOUT', params: {totalprice}
  //       });
  //         }}> */}
  //     <input style={{
  //         fontSize:24,
  //         fontWeight:"bold",
  //         color:'white'
  //       }}>
  //       CHECKOUT
  //     </input>
  //   {/* </TouchableOpacity> */}

  //   <div style={{height:20}} />


  //  </div>
        
      );
    }

    export default CartScreen