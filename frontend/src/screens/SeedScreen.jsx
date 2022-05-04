import React from 'react'
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
        
             <Card style={{ width: '18rem' }}>
                 <Link to={`/seed/${seed._id}`}> 
  {/* <Card.Img variant="top" src={"./images/rose.jpg"} /> */}
  <Card.Img variant="top" src={`../${seed.image}`} />

  </Link>
  
  <Card.Body>
  <Link to={`/seed/${seed._id}`}>
    <Card.Title as="div">
        <strong>
        {seed.name}
        </strong></Card.Title></Link>
    <Card.Text as="div">
      
         <Rating value={seed.rating} text={`${seed.numreviews} reviews`}/>

      
    </Card.Text>
    <Card.Text as="div">
      <div className="my-3">
          {seed.price} 

      </div>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </>
    )
}

export default SeedScreen
