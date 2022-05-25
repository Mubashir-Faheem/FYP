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
            
<Row>
            <Col md={5}>
                                
                                <Card className="my-3 p-3 rounded"  style={{width:'440px',height:'440px'}}>
                
                            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
                            <Card.Img style={{width:'400px',height:'400px'}}variant="top" src={`../${renting && renting.image}` }  />
                            </Card> 
                        </Col>
            <Col md={3}>
        <Card className="my-3 p-3 rounded">
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{renting && renting.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    Price:Rs. {renting &&renting.price} /hr
                    </ListGroupItem>
                    <ListGroupItem>
                       Tool Required: {renting &&renting.tool}
                    </ListGroupItem>
                    </ListGroup>
                    </Card>
                    </Col>
                    <Col style={{marginTop:'15px'}}>
                <ListGroupItem>
                    
            {/* <ListGroupItem> */}
                <Row >
                    <Col>Status:</Col>
                    <Col>{renting &&renting.countinstock > 0? "In Stock": "Out of Stock" }</Col>
                </Row>
                {/* </ListGroupItem> */}
                {  renting.countinstock > 0 &&(
                    // <ListGroupItem>
                     <Row>
                         <Col style={{color:'red'}}>No. of Hours  
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
                //  </ListGroupItem>
                )}
                <br />
                {/* <ListGroupItem> */}
                    <Button id="btn" className="btn-success " type="button" to="/CartScreen" onClick={addToCartHandler} >Rent Out </Button>
                    
                  
                {/* </ListGroupItem> */}
                 </ListGroupItem>
{/*                  
                </ListGroup>
                </Card> */}
                </Col>
                </Row>
                </div>
              )}
            
    
                                
                

    
    </>
  )
}

export default RentingDetails