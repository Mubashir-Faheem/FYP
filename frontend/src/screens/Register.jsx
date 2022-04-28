import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav'


const Register=()=>{

  function refreshPage() {
    window.location.reload(false);
  }
    return(

        <div className="Row" to='/'>
        <div className="Col-sm-3"></div>
        <label  className="col-sm-2 col-form-label">Name:</label>
        
          <input type="text" name="username"  id="username" placeholder="Name" />
          {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
        

          <div className="Col-sm-3"></div>
        <label  className="col-sm-2 col-form-label">Email:</label>
        
          <input type="text" name="username"  id="username" placeholder="Email" />
          {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
        
          <div className="Col-sm-3"></div>
        <label  className="col-sm-2 col-form-label">Age:</label>
        
          <input type="text" name="username"  id="username" placeholder="Age" />
          {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
        
          <div className="Col-sm-3"></div>
        <label  className="col-sm-2 col-form-label">City:</label>
        
          <input type="text" name="username"  id="username" placeholder="City" />
          {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
        
          <div className="Col-sm-3"></div>
        <label  className="col-sm-2 col-form-label">Address:</label>
        
          <input type="text" name="username"  id="username" placeholder="Address" />
          {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
        
          <div className="Col-sm-3"></div>
        <label  className="col-sm-2 col-form-label">Phone No</label>
        
          <input type="text" name="username"  id="username" placeholder="Phone No" />
          {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
          
          <div className="Col-sm-3"></div>
          <div className="Col-sm-3">
         {/* <LinkContainer to='/signup'> */}
          <button onClick={refreshPage} >Reset</button>
          {/* </LinkContainer> */}
         <LinkContainer to='/signin'>
          <button>Submit</button>
          </LinkContainer>
          </div>
          </div>
        
        
     
     
    )}
        export default Register