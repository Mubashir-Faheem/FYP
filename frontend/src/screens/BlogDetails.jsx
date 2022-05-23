import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {Row,Col,ListGroup,Button,Image, ListGroupItem,Form} from 'react-bootstrap'
import {useParams,useNavigate} from "react-router-dom"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import {listBlogDetails} from '../actions/blogActions'
import Loader from '../components/shared/loader'
import Message from '../components/shared/message'


const BlogDetails = () => {

    const {id}=useParams()
    const dispatch =useDispatch();
    const blogDetails=useSelector(state =>state.blogDetails)
    const{loading,error,blog} =blogDetails

    useEffect(()=>{

   
        console.log("id",id)
        
        dispatch(listBlogDetails(id))
    },[dispatch]);
  return (
    <>
    
    {loading ? (
                <Loader/>
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                  
                <div>
                <Link to="/blogscreen " className="btn btn-dark">
                    <i class="fas fa-arrow-left"></i> &nbsp; Go Back
            </Link>
                <Row>
                 <Col md={12}>
                                
                {/* <Card className="my-3 p-3 rounded"> */}

            {/* <Image src={product &&product.image} alt={product && product.name} /> */}
            <Card.Img variant="top" src={`../${blog && blog.image}` }  />
            {/* </Card>  */}
        </Col>
        </Row>
        
        <Col md={6} >
        {/* <Col className="my-3 p-3 rounded" style={{textAlign:'center'}}> */}
            <ListGroup variant="flush">
                <ListGroupItem >
                    <h3 >{blog && blog.name}</h3>
                </ListGroupItem>
                </ListGroup>
                </Col>
                {/* </Col> */}
                <Col>
                        {blog &&blog.description}
                    </Col>


                {/* </ListGroup> */}
                {/* </Card> */}
                {/* </Col> */}
                {/* </Row> */}
                </div>
              )}
    



    </>
  )
}

export default BlogDetails