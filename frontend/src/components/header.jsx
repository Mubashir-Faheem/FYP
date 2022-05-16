import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from "react-router-bootstrap"
const header = () => {
    return (
        <>
           <Navbar bg="light" expand="lg" variant="light" collapseOnSelect>
  <Container>
    <LinkContainer to="/">
    <Navbar.Brand >Garden Mart</Navbar.Brand>
    
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to="/signin">
        <Nav.Link  >
        <i class="fas fa-sign-in-alt"></i> &nbsp; SignIn</Nav.Link>
        </LinkContainer>
       <LinkContainer to ="/signup">
       <Nav.Link >
        <i class="fas fa-user-plus"></i>&nbsp; SignUp</Nav.Link>
        </LinkContainer>
       <LinkContainer to ="/cart">
       <Nav.Link >
        <i class="fas fa-user-plus"></i>&nbsp; Cart</Nav.Link>
        </LinkContainer>
        
        
      </Nav>
    </Navbar.Collapse>
    
  </Container>
</Navbar> 
        </>
    )
}

export default header
