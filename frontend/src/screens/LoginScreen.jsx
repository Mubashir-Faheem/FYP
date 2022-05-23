import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col,Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/message";
import Loader from "../components/shared/loader";
import { login } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";
import {useLocation,useNavigate} from 'react-router-dom'

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const location=useLocation()
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
const history=useNavigate()
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };

  return (
    <>
    {/* <p style={{width: '115%',marginLeft:"-80px",
  height: '450px',backgroundSize: 'cover',backgroundImage:`url("https://images.unsplash.com/photo-1453791052107-5c843da62d97?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870")`}}> */}
    <p style={{width: '115%',marginLeft:"-80px",
  height: '450px',backgroundSize: 'cover',backgroundRepeat: "no-repeat",backgroundImage:`url("https://media.istockphoto.com/photos/plant-in-hands-ecology-concept-nature-background-picture-id1128961545?b=1&k=20&m=1128961545&s=170667a&w=0&h=sfVmdvc2V5dgoaCtfQBnnCs3bkBe6vaCriXprdfVl7M=")`}}>
    
      <FormContainer >
        <br />
        <Col style={{align:"center",marginLeft:"50px"}}>
        {/* <Card style={{alignText:"center",backgroundColor:"#1F6A56",align:"center",height:"400px"}} > */}
        <Card style={{alignText:"center",backgroundSize: 'cover',backgroundImage:`url("https://wallpapercave.com/wp/wp4021632.jpg")`}} >
        <h1 style={{color:"#F5FFFF"}}>SIGN IN</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {Loader}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label style={{color:"#F5FFFF"}}> <strong> Email Address </strong></Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="password">
            <Form.Label style={{color:"#F5FFFF"}}><strong> Password </strong></Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            <br />

          </Form.Group>
          <Button type="submit" varient="success" >
            SIGN IN
          </Button>
          
        </Form>
        <br />
        <Row>
          <Col style={{color:"#F5FFFF"}}>
            New Customer ?
            {/* <Link to={redirect ? `signup?redirect=${redirect}` : "/signup"}> */}
            <Link to={ "/signup"} style={{color:"#F5FFFF"}}>
              Register
            </Link>
          </Col>
        </Row>
        </Card>
        </Col>
      </FormContainer>
      
    
    </p>
    </>
  );
};

export default LoginScreen;
