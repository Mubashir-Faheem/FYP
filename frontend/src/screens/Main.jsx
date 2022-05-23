import React, {useState,useEffect} from 'react';
import axios from 'axios'
import MainCarousel from '../components/MainCarousel';
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
       <br />
       <br />
       <MainCarousel/>
       <div style={{backgroundColor:'#FFFFF',}}>
       <br />
       <br />
       
       <br />
       <br />

       <h3 style={{color:'#356C4E'}}>Categories</h3>
       <br />
        <LinkContainer to="/homescreen" style={{display: 'left',  justifyContent:'left', alignItems:'left', }} > 

        <button > <img src="https://img.icons8.com/doodle/344/plant-under-sun--v1.png" style={{height:'40px'}}/>  &nbsp; Plants</button>
     
       
       
        
       </LinkContainer>
       {/* <hr /><br /><br /> */}
       

       <LinkContainer to="/SeedScreen" style={{display: 'center',justifyContent:'center', alignItems:'center ',marginLeft:'35%',marginTop:"40px" }}> 

       <button ><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-seeds-gardening-flaticons-lineal-color-flat-icons.png" style={{height:'40px'}}/>  &nbsp; Seeds</button>
     
       

        
       </LinkContainer>
       {/* <hr /><br /><br /> */}
       <LinkContainer to="/FertScreen" style={{display: 'right',justifyContent:'right', alignItems:'right ',marginTop:"-100px", marginLeft:"300px"}}> 

       <button ><img src="https://img.icons8.com/external-others-pike-picture/2x/external-Fertilizers-gardening-others-pike-picture.png" style={{height:'40px'}}/> &nbsp; Fertilizers</button>
     
       

        
       </LinkContainer>
       <hr /><br /><br />
       
      
    
   
<h3 style={{color:'#356C4E'}}>Services</h3>
       <br /><br />
        
       <LinkContainer to="/blogscreen" style={{display: 'left',  justifyContent:'left', alignItems:'left', }} > 

       <button ><img src="https://img.icons8.com/external-others-pike-picture/2x/external-Fertilizers-gardening-others-pike-picture.png" style={{height:'40px'}}/> &nbsp; Blogs</button>



 
</LinkContainer>
{/* <hr /><br /><br /> */}


<LinkContainer to="/Forum" style={{display: 'center',justifyContent:'center', alignItems:'center ',marginLeft:'10%' }}> 

<button ><img src="https://img.icons8.com/office/2x/comment-discussion.png" style={{height:'40px'}}/> &nbsp; Forums</button>



 
</LinkContainer>
{/* <hr /><br /><br /> */}
<LinkContainer to="/Videos" style={{display: 'right',justifyContent:'right', alignItems:'right ',marginLeft:'10%'}}> 

<button ><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-videos-modelling-agency-flaticons-lineal-color-flat-icons-3.png" style={{height:'40px'}}/> &nbsp; Videos</button>



 
</LinkContainer>

<LinkContainer to="/renting" style={{display: 'right',justifyContent:'right', alignItems:'right ' ,marginLeft:'10%'}}> 

<button ><img src="https://img.icons8.com/color/2x/services--v2.gif" style={{height:'40px'}}/> &nbsp; Renting</button>



 
</LinkContainer>
<LinkContainer to="/Vg" style={{display: 'right',justifyContent:'right', alignItems:'right ',marginLeft:'10%' }}> 

<button ><img src="https://img.icons8.com/color/2x/garden.png" style={{height:'40px'}}/> &nbsp; Virtual Garden</button>



 
</LinkContainer>

<hr /><br /><br />
</div>

  </>

       
        )
      
}
export default Main