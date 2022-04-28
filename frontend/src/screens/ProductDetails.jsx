import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from "../products"
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"

    const ProductDetails = ({match}) => {
        let {id}=useParams();
        const product=Product.find((p)=>p._id===id)
    
const[Product1,setProduct]=useState([]);
useEffect(()=>{
    const fetchProduct=async ()=>{
        const{data}=await axios.get(`/products/${match.id}`);
        setProduct(data);
    };
},[]);
  
    return (
        
        <div>
            <Link to="/homescreen" className="btn btn-dark">
                <i class="fas fa-arrow-left"></i> &nbsp; Go Back
        </Link>
            <Row>
    <Col md={6}>
        {/* <Image src={product.image} alt={product.name} /> */}
        <Card.Img variant="top" src={`../${product.image}` }  />
    </Col>
    <Col md={3}>
        <ListGroup variant="flush">
            <ListGroupItem>
                <h3>{product.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
                <Rating value={product.ratings}
                text={`${product.numreviews} Reviews`}/>

                
            </ListGroupItem>
            <ListGroupItem>
                Price: {product.price}
                </ListGroupItem>
                <ListGroupItem>
                    {product.description}
                </ListGroupItem>
            </ListGroup>
    
    </Col>
    <Col md={3}>

        <ListGroupItem>
            <Row>
                <Col>Status:</Col>
                <Col>{product.countinstock > 0? "In Stock": "Out of Stock" }</Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Button id="btn" className="btn-block" type="button" to="/">Add to Cart </Button>
                
              
            </ListGroupItem>
    </Col>


                </Row>
            
        </div>
    )
    
}

export default ProductDetails
