import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../actions/blogActions";
import { Row, Col } from "react-bootstrap";
import BlogScreen from "./BlogScreen";
import Loader from "../components/shared/loader";
import Message from "../components/shared/message";


const BlogHome = () => {
    const dispatch=useDispatch()
    const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);
  console.log(blogs)



  return (
    <>
     {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
       
        <Row>
           <h1 style={{color:'#1D4B2C'}}>BLOGS</h1>
          {
          blogs.map((blog) => (
            
            <Col key={blog._id} md={3} >
              <BlogScreen  blog={blog}  />
            </Col>
          ))}
        </Row>
      )}
    
  

    </>
  )
}

export default BlogHome