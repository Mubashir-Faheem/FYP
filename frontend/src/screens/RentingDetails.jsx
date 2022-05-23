import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,ListGroup,Button,Image, ListGroupItem,Form} from 'react-bootstrap'
import {useParams,useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import {listRentingDetails} from '../actions/rentingAction'
import Loader from '../components/shared/loader'
import Message from '../components/shared/message'


const RentingDetails = () => {
    const [qty,setQty]=useState(1);
    let {id}=useParams();
    // console.log(id)
    const dispatch =useDispatch();
    const rentingDetails=useSelector(state =>state.rentingDetails)
    const{loading,error,renting} =rentingDetails
    useEffect(()=>{

   
        console.log("id",id)
        
        dispatch(listRentingDetails(id))
    },[dispatch]);
    const history=useNavigate()

    const addToCartHandler = ()=>{
 
    
        history(`/cart/${id}?qty=${qty}`)
       //  history(`/CartScreen/cart/:id?/${id}?qty=${qty}`)
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
            

            <Col md={6}>
                                
                                <Card className="my-3 p-3 rounded">
                
                            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
                            <Card.Img variant="top" src={`../${renting && renting.image}` }  />
                            </Card> 
                        </Col>
            <Col md={3}>
        <Card className="my-3 p-3 rounded">
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{renting && renting.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    Price:Rs. {renting &&renting.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        {renting &&renting.tool}
                    </ListGroupItem>
                    
                <ListGroupItem>
                    
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{renting &&renting.countinstock > 0? "In Stock": "Out of Stock" }</Col>
                </Row>
                </ListGroupItem>
                {  renting.countinstock > 0 &&(
                    <ListGroupItem>
                     <Row>
                         <Col >Times <p style={{color:"red",}}>(/hr)</p> 
                         </Col>
                         <Form.Control as ="select" value={qty} onChange={(e)=> setQty(e.target.value)}>
                             {
                                 [...Array(renting.countinstock).keys()].map((x)=>(
                                     <option key={x+1} value={x+1}>
                                         {x+1}

                                     </option>

                                 ))
                             }
                         </Form.Control>
                     </Row>
                 </ListGroupItem>
                )}
                <ListGroupItem>
                    <Button id="btn" className="btn-block" type="button" to="/CartScreen" onClick={addToCartHandler} >Add to Cart </Button>
                    
                  
                </ListGroupItem>
                 </ListGroupItem>
                 
                </ListGroup>
                </Card>
                </Col>
                </div>
              )}
            
    
                                
                

    
    </>
  )
}

export default RentingDetails