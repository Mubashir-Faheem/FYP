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
import {listSeedDetails} from '../actions/seedActions'
import Loader from '../components/shared/loader'
import Message from '../components/shared/message'
// import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


    const SeedDetails = () => {
        let {id}=useParams();
        const [qty,setQty]=useState(1);
        // const product=Product.find((p)=>p._id===id)
    const dispatch =useDispatch();
    const seedDetails=useSelector(state =>state.seedDetails)
    const{loading,error,seed} =seedDetails
    // const[seed,setSeed]=useState([]);
useEffect(()=>{

    // let {id}=useParams();
    console.log("he",id)
    // const fetchProduct=async ()=>{
    //     // const{data}=await axios.get(`/products:id/${match.id}`);
    //     const{data}=await axios.get(`/seeds/${useParams.id}`)
    //     setSeed(data);
    // };
    // fetchProduct()
    // console.log(seed)
    // console.log("hello world",useParams.id)
    dispatch(listSeedDetails(id))
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
            <Card.Img variant="top" src={`../${seed && seed.image}` }  />
            </Card> 
        </Col>
        
        <Col md={3}>
        <Card className="my-3 p-3 rounded">
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{seed && seed.name}</h3>
                </ListGroupItem>
    
                <ListGroupItem>
                    <Rating value={seed && seed.ratings}
                    text={`${seed && seed.numreviews} Reviews`}/>
    
                    
                </ListGroupItem>
                <ListGroupItem>
                    Price:Rs. {seed &&seed.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        {seed &&seed.description}
                    </ListGroupItem>
                </ListGroup>
                </Card>
        
        </Col>
        <Col md={3}>
    
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{seed &&seed.countinstock > 0? "In Stock": "Out of Stock" }</Col>
                </Row>
                </ListGroupItem>
                {/* {  seed.countinstock > 0 &&(
                 <ListGroupItem>
                     <Row>
                         <Col>Qty
                         </Col>
                         <Form.Control as ="select" value={qty} onChange={(e)=> setQty(e.target.value)}>
                             {
                                 [...Array(seed.countinstock).keys()].map((x)=>(
                                     <option key={x+1} value={x+1}>
                                         {x+1}

                                     </option>

                                 ))
                             }
                         </Form.Control>
                     </Row>
                 </ListGroupItem>
             )
             
    } */}



                <ListGroupItem>
                    <Button id="btn" className="btn-block" type="button"  >Add to Cart </Button>
                    
                  
                </ListGroupItem>
                
        </Col>
    
    
                    </Row>
                
            </div>
               )}
            
             </>

        
        
        
    )
    
    
};

export default SeedDetails
