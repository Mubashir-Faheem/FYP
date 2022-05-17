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



import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import {addToCart} from '../actions/cartAction'
import {useParams,useSearchParams} from 'react-router-dom'
// import {ReactDom} from 'react-dom'

const CartScreen = () => {
  let{id}=useParams() 
  console.log("id",id)
  // const qty=location.search
  // console.log(qty)
  let [searchParams]=useSearchParams()
  const qty=searchParams.get('qty')
  console.log("quantity",qty)

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);


  return (
    <h1>Cart</h1>
  )
}

export default CartScreen