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





const SeedScreen = ({seed}) => {
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
                 <Link to={`/seeds/${seed && seed._id}`}> 
  {/* <Card.Img variant="top" src={"./images/rose.jpg"} /> */}
  <Card.Img variant="top" src={`../${seed && seed.image}`} />

  </Link>
  
  <Card.Body>
  <Link to={`/seeds/${seed &&seed._id}`}>
    <Card.Title as="div">
        <strong>
        {seed && seed.name}
        </strong></Card.Title></Link>
    <Card.Text as="div">
      
         <Rating value={seed && seed.rating} text={`${seed && seed.numreviews} reviews`}/>

      
    </Card.Text>
    <Card.Text as="div">
      <div className="my-3">Rs.
          {seed && seed.price} 

      </div>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </>
    )
}



export default SeedScreen






