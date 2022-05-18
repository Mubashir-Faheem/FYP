// import React from 'react'
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
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
        <Card className="my-3 p-3 rounded">
             {/* <Card style={{ width: '18rem' }}> */}
                 <Link to={`/product/${product && product._id}`}> 
  {/* <Card.Img variant="top" src={"./images/rose.jpg"} /> */}
  <Card.Img variant="top" src={`../${product &&product.image}`} />

  </Link>
  
  <Card.Body>
  <Link to={`/product/${product &&product._id}`}>
    <Card.Title as="div">
        <strong>
        {product &&product.name}
        </strong></Card.Title></Link>
    <Card.Text as="div">
      
         <Rating value={product &&product.rating} text={`${product &&product.numreviews} reviews`}/>

      
    </Card.Text>
    <Card.Text as="div">
      <div className="my-3">Rs.
          {product &&product.price} 

      </div>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </>
    )
}





export default ProductScreen

// import React from "react";
// import { Card } from "react-bootstrap";
// import Rating from "../components/Rating";
// import { Link } from "react-router-dom";

// const ProductScreen = ({ product }) => {
//   return (
//     <>
//       <Card className="my-3 p-3 rounded">
//         <Link to={`/product/${product._id}`}>
//           <Card.Img src={product.image} variant="top" />
//         </Link>
//         <Card.Body>
//           <Link to={`/product/${product._id}`}>
//             <Card.Title as="div">
//               <strong>{product.name}</strong>
//             </Card.Title>
//           </Link>
//           <Card.Text as="div">
//             <Rating
//               value={product.rating}
//               text={`${product.numReviews} reviews`}
//             />
//           </Card.Text>
//           <Card.Text as="div">Rs {product.price}</Card.Text>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default ProductScreen;
