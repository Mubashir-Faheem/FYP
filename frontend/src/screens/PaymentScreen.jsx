import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartAction";
import CheckoutStep from "../components/shared/CheckoutStep";
import { useNavigate } from 'react-router-dom'

const PaymentScreen = () => {
    const history=useNavigate(); 
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    history("/shipping");
  }
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("creditcard");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history("/placeorder");
  };
  return (
    <>
      <CheckoutStep step1 step2 step3 />
      <h1 style={{color:'#1D4B2C'}}>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend" style={{color:'#1D4B2C'}}>Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Credit Card"
              id="creditcard"
              name="paymentMethod"
              value="creditcard" checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

<Form.Check
              type="radio"
              label="Cash on Delivery"
              id="Cash"
              name="paymentMethod"
              value="Cash" checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <br />
        <Button type="submit" variant="success">
          Continue
        </Button>
      </Form>
    </>
  );
};

export default PaymentScreen;
