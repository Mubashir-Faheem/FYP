// import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
// import {LinkContainer} from "react-router-bootstrap"
// import {useDispatch,useSelector} from 'react-redux'
// const header = () => {
//     return (
//         <>
//            <Navbar bg="light" expand="lg" variant="light" collapseOnSelect>
//   <Container>
//     <LinkContainer to="/">
//     <Navbar.Brand >Garden Mart</Navbar.Brand>
    
//     </LinkContainer>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ml-auto">
        
//       <LinkContainer to ="/login">
//        <Nav.Link >
//         <i class="fas fa-user-plus"></i>&nbsp; SignIn</Nav.Link>
//         </LinkContainer>
//        <LinkContainer to ="/signup">
//        <Nav.Link >
//         <i class="fas fa-user-plus"></i>&nbsp; SignUp</Nav.Link>
//         </LinkContainer>
//        <LinkContainer to ="/cart">
//        <Nav.Link >
//         <i class="fas fa-user-plus"></i>&nbsp; Cart</Nav.Link>
//         </LinkContainer>
        
        
//       </Nav>
//     </Navbar.Collapse>
    
//   </Container>
// </Navbar> 
//         </>
//     )
// }

// export default header


import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Garden Mart</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  &nbsp; Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    &nbsp; singIn
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
