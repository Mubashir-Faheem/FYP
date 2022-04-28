import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { Alert } from 'bootstrap';


const Forget=()=>{

//   function refreshPage() {
//     window.location.reload(false);
//   }
function alert(){
    alert("Link sent to verified email");
}
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
        <div className='Col-lg-6'>
            <button onClick={refreshPage}>Reset Link</button>
            {/* <button key={"abc"}>Send Link</button>
            <Alert key={"abc" } >
    
  </Alert> */}
        </div>
        </div>
    )}
    export default Forget