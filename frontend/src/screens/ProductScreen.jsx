import React from 'react'
import Card from "react-bootstrap/Card"
import Rating from "../components/Rating"
import {Link} from "react-router-dom"
// import Product from "..products/"
// import {Image} from "react-bootstrap"

const ProductScreen = ({product}) => {
    return (
      
        <>
        <div>
         {/* <Link to="/" className="btn btn-dark">
                <i class="fas fa-arrow-left"></i> &nbsp; Go Back
        </Link> */}
        {/* <button className='btn btn-dark' to="/"> Go back</button> */}
        </div> 
        
             <Card style={{ width: '18rem' }}>
                 <Link to={`/product/${product._id}`}> 
  {/* <Card.Img variant="top" src={"./images/rose.jpg"} /> */}
  <Card.Img variant="top" src={`../${product.image}`} />

  </Link>
  
  <Card.Body>
  <Link to={`/product/${product._id}`}>
    <Card.Title as="div">
        <strong>
        {product.name}
        </strong></Card.Title></Link>
    <Card.Text as="div">
      
         <Rating value={product.rating} text={`${product.numreviews} reviews`}/>

      
    </Card.Text>
    <Card.Text as="div">
      <div className="my-3">
          {product.price} 

      </div>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </>
    )
}

export default ProductScreen
