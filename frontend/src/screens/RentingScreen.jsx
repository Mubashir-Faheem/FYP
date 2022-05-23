import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button,ListGroupItem} from 'react-bootstrap';
import "./Renting.css";
import { Link } from 'react-router-dom';
import {useNavigate,useParams} from 'react-router-dom'





//import axios from 'axios';

const RentingScreen = ({renting}) => {
//   const {id}=useParams()
//   console.log(id)

//   const history=useNavigate()
//   const addToCartHandler = ()=>{
 
    
//     history(`/cart/${id}`)
//    //  history(`/CartScreen/cart/:id?/${id}?qty=${qty}`)
// }

return (
  <div>
  {/* <h1>Renting Services</h1> */}
  {/* <div className='item-container'>
    {data.map((data) => (
      <Card className='card'>
        <Card.Body className='cardbody'>
        <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.tool}
          </Card.Text>
          <Card.Text>
            {data.price}
          </Card.Text>
        </Card.Body>
        <Button className='Button'> Add to cart</Button>
      </Card> 
  ))}
  </div> */}

       <Card className="my-3 p-3 rounded">
             {/* <Card style={{ width: '18rem' }}> */}
                 <Link to={`/renting/${renting && renting._id}`}>
                 <Card.Img variant="top" src={`../${renting &&renting.image}`} />
  </Link>

  
  <Card.Body>
  <Link to={`/renting/${renting &&renting._id}`}>
    <Card.Title as="div">
        <strong>
        {renting &&renting.name}
        </strong></Card.Title></Link>
        </Card.Body>
        <Card.Text as="div">
      <div className="my-3">
        <strong>Tool Required:</strong> 
      <br />
          {renting &&renting.tool} 

      </div>
    </Card.Text>

        <Card.Text as="div">
      <div className="my-3">Rs.
          {renting &&renting.price} 

      </div>
    </Card.Text>
    {/* <ListGroupItem>
                    <Button id="btn" className="btn-block" type="button" to="/CartScreen" onClick={addToCartHandler} >Add to Cart </Button>
                    
                  
                </ListGroupItem> */}
  </Card>
  </div>
  );
};
export default RentingScreen;
