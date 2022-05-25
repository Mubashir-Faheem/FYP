import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/message";
import Loader from "../components/shared/loader";
import { register } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";
import {useParams,useNavigate,useLocation} from 'react-router-dom'

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
const location=useLocation()
  const redirect = location.search ? location.search.split("=")[1] : "/";
  

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
const history=useNavigate()
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      setMessage("Password do not macth");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
    <div style={{backgroundSize: 'cover',backgroundRepeat: "no-repeat",width: '115%',marginLeft:"-80px",
  height: '500px',backgroundImage:`url("https://rb.gy/ik1hqv")`}}>
      <FormContainer>
        <br />
        <Col style={{align:"center",marginLeft:"400px"}}>
        <Card style={{width:"300px",backgroundColor:'#35654E'}}>
        <h1 style={{color:'#F5FFFF'}}>Register</h1>
        <br />
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label style={{color:'#F5FFFF'}}> <strong> Name</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
            {/* <br /> */}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label style={{color:'#F5FFFF'}}><strong> Email Address</strong></Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            {/* <br/> */}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label style={{color:'#F5FFFF'}}><strong> Password</strong></Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
             {/* <br/> */}
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label style={{color:'#F5FFFF'}}><strong> Confirm Password</strong></Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br/>
          <Button type="submit" varient="primary" className="btn-success">
            Register
          </Button>
        </Form>
        <Row>
          <Col style={{color:'#F5FFFF'}}>
            Have an account !
            {/* <Link to={redirect ? `login?redirect=${redirect}` : "/login"}> */}
            <Link to={ "/login"}>
              Login
            </Link>
          </Col>
        </Row>
        </Card>
        </Col>
      </FormContainer>
      </div>
    </>
  );
};

export default RegisterScreen;
