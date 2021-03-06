import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/message";
import CheckOutStep from "../components/shared/CheckoutStep";
import {useNavigate} from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout";

const PlaceOrderScreen = ({ }) => {
    const history=useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  // dispatch(addToCart(id))
  // const productDetails=useSelector(state =>state.productDetails)
  // const{cartItems,product,item} =productDetails
 
  //fun for decimal
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice =
  addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 200);
  // cart.shippingPrice=200
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));
  // cart.taxPrice=0.00
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  // const productprice= 
  // const totalprice=parseInt(productprice)+200


  function onToken(token){
    dispatch(
          createOrder({
            token,
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.productprice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
          })
        
        );
        console.log(token)



  }
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.productprice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history(`/order/${order._id}`);
    }
    //eslint-disable-next-line
  }, [ success]);
  return (
    <>
      <CheckOutStep step1 step2 step3 step4 />
      <Row>
        <Col md={8} >
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 style={{color:'#1D4B2C'}}>Shipping</h2>
              <p>
                <strong>Address :</strong>
                {cart.shippingAddress.address}&nbsp;
                {cart.shippingAddress.city}&nbsp;
                {cart.shippingAddress.postalcode}&nbsp;
                {cart.shippingAddress.country}&nbsp;
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 style={{color:'#1D4B2C'}}>Payment Method</h2>
              <p>
                <strong>{cart.paymentMethod}</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 style={{color:'#1D4B2C'}}>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message style={{color:'#1D4B2C'}}>Your Cart is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          Items Selected:
                         <strong> {item.qty} </strong>

                         {/* X Rs.{item.price}  */}
                          {/* = Rs.{item.price} */}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 style={{color:'#1D4B2C'}}>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col >Items</Col>
                  <Col>Rs.{cart.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs.{cart.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs.{cart.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs.{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item> */}
              <br />
             

              {cart.paymentMethod=='creditcard' ?(
              <StripeCheckout
        token={onToken}
        // shippingAddress={cart.shippingAddress.address,
        // cart.shippingAddress.city,
        // cart.shippingAddress.postalcode,
        // cart.shippingAddress.country}
        shippingAddress
        amount={cart.totalPrice*100}
        currency='PKR'
        stripeKey="pk_test_51L1FqRSEhdTePo5yWy3pZMXcn9AgQ6RQoUFsfi8Q1rH6Kln2e0iPtsWZ6DG7sIcmW5Fy5JUDjTr3m7mbgPoxeBwg00iOSeA4Gx"
      > 
      <Button
                type="button"
                className="btn-success"
                disabled={cart.cartItems === 0}
                // onClick={placeOrderHandler}
              >
                Place Order
              </Button>
      </StripeCheckout>):(
        <Button
                type="button"
                className="btn-success"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
                // onClick={onToken}
              >
                Place Order
              </Button>
      )
      
      }
             
              {/* <Button
                type="button"
                className="btn-success"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </Button> */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
