import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from "../products"
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import Seed from '../seeds'

    const SeedDetails = ({match}) => {
        let {id}=useParams();
        const seed=Seed.find((s)=>s._id===id)
    
const[Seed1,setSeed]=useState([]);
useEffect(()=>{
    const fetchSeed=async ()=>{
        const{data}=await axios.get(`/seeds/${match.id}`);
        setSeed(data);
    };
},[]);
  
    return (
        
        <div>
            <Link to="/" className="btn btn-dark">
                <i class="fas fa-arrow-left"></i> &nbsp; Go Back
        </Link>
            <Row>
    <Col md={6}>
        {/* <Image src={product.image} alt={product.name} /> */}
        <Card.Img variant="top" src={`../${seed.image}` }  />
    </Col>
    <Col md={3}>
        <ListGroup variant="flush">
            <ListGroupItem>
                <h3>{seed.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
                <Rating value={seed.ratings}
                text={`${seed.numreviews} Reviews`}/>

                
            </ListGroupItem>
            <ListGroupItem>
                Price: {seed.price}
                </ListGroupItem>
                <ListGroupItem>
                    {seed.description}
                </ListGroupItem>
            </ListGroup>
    
    </Col>
    <Col md={3}>

        <ListGroupItem>
            <Row>
                <Col>Status:</Col>
                <Col>{seed.countinstock > 0? "In Stock": "Out of Stock" }</Col>
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

export default SeedDetails
