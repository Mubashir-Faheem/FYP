// import React from 'react'
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card"
import Rating from "../components/Rating"
import {Link} from "react-router-dom"


const BlogScreen = ({blog}) => {
  return (
    <>
    <Card className="my-3 p-3 rounded">
             {/* <Card style={{ width: '18rem' }}> */}
                 <Link to={`/blog/${blog && blog._id}`}> 
  {/* <Card.Img variant="top" src={"./images/rose.jpg"} /> */}
  <Card.Img variant="top" src={`../${blog &&blog.image}`} />

  </Link>
  
  <Card.Body>
  <Link to={`/blog/${blog &&blog._id}`}>
    <Card.Title as="div">
        <strong>
        {blog &&blog.name}
        </strong></Card.Title></Link>
    <Card.Text as="div"></Card.Text>
    </Card.Body>
    </Card>
    </>
  )
}

export default BlogScreen