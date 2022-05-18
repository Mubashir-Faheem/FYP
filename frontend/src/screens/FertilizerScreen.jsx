// import React from 'react'
import React, {useState,useEffect} from 'react';
import axios from 'axios'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card"
import Rating from "../components/Rating"
import {Link} from "react-router-dom"
// import Product from "..products/"
// import {Image} from "react-bootstrap"





const FertilizerScreen = ({fertilizer}) => {
    return (
      
        <>
        <div>
         {/* <Link to="/" className="btn btn-dark">
                <i class="fas fa-arrow-left"></i> &nbsp; Go Back
        </Link> */}
        {/* <button className='btn btn-dark' to="/"> Go back</button> */}
        </div> 
        <Card className="my-3 p-3 rounded">
             {/* <Card style={{ width: '18rem' }}> */}
                 <Link to={`/fertilizers/${fertilizer && fertilizer._id}`}> 
  {/* <Card.Img variant="top" src={"./images/rose.jpg"} /> */}
  <Card.Img variant="top" src={`../${fertilizer && fertilizer.image}`} />

  </Link>
  
  <Card.Body>
  <Link to={`/fertilizers/${fertilizer &&fertilizer._id}`}>
    <Card.Title as="div">
        <strong>
        {fertilizer && fertilizer.name}
        </strong></Card.Title></Link>
    <Card.Text as="div">
      
         <Rating value={fertilizer && fertilizer.rating} text={`${fertilizer && fertilizer.numreviews} reviews`}/>

      
    </Card.Text>
    <Card.Text as="div">
      <div className="my-3">Rs.
          {fertilizer && fertilizer.price} 

      </div>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </>
    )
}



export default FertilizerScreen






