import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import product from '../products';
import { Container } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"
// import { MDBContainer } from 'mdbreact';



const Main = () => {
    return (
       <>
       <h3>Categories</h3>
       <br /><br /><br />
        <LinkContainer to="/homescreen" style={{display: 'left',  justifyContent:'left', alignItems:'left', }} > 

       <div className="btn btn-dark"   >    <i class="left" ></i> &nbsp; Plants</div>
     
       
       
        
       </LinkContainer>
       {/* <hr /><br /><br /> */}
       

       <LinkContainer to="/SeedScreen" style={{display: 'center',justifyContent:'center', alignItems:'center ',marginLeft:'35%' }}> 

       <div className="btn btn-dark"  >    <i class="c"></i> &nbsp; Seeds</div>
     
       

        
       </LinkContainer>
       {/* <hr /><br /><br /> */}
       <LinkContainer to="/FertScreen" style={{display: 'right',justifyContent:'right', alignItems:'right ',marginLeft:'80%',marginTop:"-60px" }}> 

       <div className="btn btn-dark"  >    <i class=""></i> &nbsp; Fertilizers</div>
     
       

        
       </LinkContainer>
       <hr /><br /><br />
       
      
    
   
<h3>Services</h3>
       <br /><br /><br />
        
       <LinkContainer to="/Posts" style={{display: 'left',  justifyContent:'left', alignItems:'left', }} > 

<div className="btn btn-dark"   >    <i class="left" ></i> &nbsp; Blogs</div>



 
</LinkContainer>
{/* <hr /><br /><br /> */}


<LinkContainer to="/Forum" style={{display: 'center',justifyContent:'center', alignItems:'center ',marginLeft:'10%' }}> 

<div className="btn btn-dark"  >    <i class="c"></i> &nbsp; Forums</div>



 
</LinkContainer>
{/* <hr /><br /><br /> */}
<LinkContainer to="/Videos" style={{display: 'right',justifyContent:'right', alignItems:'right ',marginLeft:'10%'}}> 

<div className="btn btn-dark"  >    <i class=""></i> &nbsp; Videos</div>



 
</LinkContainer>

<LinkContainer to="/Rent" style={{display: 'right',justifyContent:'right', alignItems:'right ' ,marginLeft:'10%'}}> 

<div className="btn btn-dark"  >    <i class=""></i> &nbsp; Renting</div>



 
</LinkContainer>
<LinkContainer to="/Vg" style={{display: 'right',justifyContent:'right', alignItems:'right ',marginLeft:'10%' }}> 

<div className="btn btn-dark"  >    <i class=""></i> &nbsp; Virtual Garden</div>



 
</LinkContainer>

<hr /><br /><br />

  </>

       
        )
      
}
export default Main