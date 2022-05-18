import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
// import Product from "../products"
// import Product from "../products"
// import Product from "../../../backend/data/products"
import {Row,Col,ListGroup,Button,Image, ListGroupItem,Form} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import {listFertilizerDetails} from '../actions/fertilizerAction'
import Loader from '../components/shared/loader'
import Message from '../components/shared/message'
// import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'



    const FertilizerDetails = () => {
        const [qty,setQty]=useState(1);
        let {id}=useParams();
        // const product=Product.find((p)=>p._id===id)
    const dispatch =useDispatch();
    const fertilizerDetails=useSelector(state =>state.fertilizerDetails)
    const{loading,error,fertilizer} =fertilizerDetails
    // const[fertilizer,setFertilizer]=useState([]);
useEffect(()=>{

    // let {id}=useParams();
    console.log("he",id)
    // const fetchFertilizer=async ()=>{
    //     // const{data}=await axios.get(`/products:id/${match.id}`);
    //     const{data}=await axios.get(`/fertilizers/${useParams.id}`)
    //     setFertilizer(data);
    // };
    // fetchFertilizer()
    // console.log(fertilizer)
    // console.log("hello world",useParams.id)
    dispatch(listFertilizerDetails(id))
},[dispatch]);

let history=useNavigate()


const addToCartHandler = ()=>{
 
    
     history(`./cart/${id}?qty=${qty}`)
    //  history.push(`./cart/${match.params.id}?qty=${qty}`)


console.log(id)
}
  
    return (
        <>
        
             {loading ? (
                <Loader/>
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                  
                <div>
                <Link to="/homescreen " className="btn btn-dark">
                    <i class="fas fa-arrow-left"></i> &nbsp; Go Back
            </Link>
                <Row>
                 <Col md={6}>
                                
                <Card className="my-3 p-3 rounded">

            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
            <Card.Img variant="top" src={`../${fertilizer && fertilizer.image}` }  />
            </Card> 
        </Col>
        
        <Col md={3}>
        <Card className="my-3 p-3 rounded">
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{fertilizer && fertilizer.name}</h3>
                </ListGroupItem>
    
                <ListGroupItem>
                    <Rating value={fertilizer && fertilizer.ratings}
                    text={`${fertilizer && fertilizer.numreviews} Reviews`}/>
    
                    
                </ListGroupItem>
                <ListGroupItem>
                    Price:Rs. {fertilizer &&fertilizer.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        {fertilizer &&fertilizer.description}
                    </ListGroupItem>
                </ListGroup>
                </Card>
        
        </Col>
        <Col md={3}>
    
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{fertilizer &&fertilizer.countinstock > 0? "In Stock": "Out of Stock" }</Col>
                </Row>
                </ListGroupItem>
               
                <ListGroupItem>
                    <Button id="btn" className="btn-block" type="button" to="/">Add to Cart </Button>
                    
                  
                </ListGroupItem>
                
        </Col>
    
    
                    </Row>
                
            </div>
                 )}
            
             </>

        
        
        
    )
    
    
};

export default FertilizerDetails
