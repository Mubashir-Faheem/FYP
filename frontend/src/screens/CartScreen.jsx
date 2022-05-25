import React, { useEffect } from "react";
import Message from "../components/shared/message";
import { Link } from "react-router-dom";
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
import { addToCart, removeFromCart } from "../actions/cartAction"
import {useParams,useNavigate,useLocation} from 'react-router-dom'

const CartScreen = () => {
  
  // const productId = match.params.id;
const {id}=useParams()
const location=useLocation()
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty)
  const dispatch = useDispatch();
const history=useNavigate()
  useEffect(() => {
    if (id) {
      // dispatch(addToCart(id));
      dispatch(addToCart(id, qty));
      
    }
    
  }
  , [dispatch, id, qty]);
  // , [dispatch, id]);
  
  
 
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log(cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    history("/login?redirect=/shipping");
  };
  return (
    <>
      <Row>
        <Col md={8}>
          <h1 style={{color:'#1D4B2C'}}>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty !<Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem>
                  <Row>
                    <Col md={2} >
                      {/* <Image src={item && item.image} alt={item.name} fluid rounded /> */}
                      <Card.Img variant="top" src={`../${item && item.image}` }  />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>Rs.{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2 style={{color:'#1D4B2C'}}>
                  subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                Rs.
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              <Button
                type="button"
                className="btn-success"
                disabled={cartItems.length === 0}
                onClick={checkout}
              >
                Proceed to checkout
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
