// import React from 'react'
import axios from 'axios'
import React, { useState, useEffect,Component,Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/shared/message'
import Loader from '../components/shared/loader'
import FormContainer from '../components/shared/FormContainer'
import { listBlogDetails,updateBlog } from '../actions/blogActions'
import { BLOG_UPDATE_RESET } from '../constants/blogConstant'
import {useNavigate,useParams} from 'react-router-dom'


const BlogEditScreen = () => {

    const {id}=useParams()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  // const [brand, setBrand] = useState('')
  // const [category, setCategory] = useState('')
  const [countinstock, setcountinstock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
const dispatch=useDispatch()
  const blogDetails = useSelector((state) => state.blogDetails)
  const { loading, error, blog } = blogDetails

  const blogUpdate = useSelector((state) => state.blogUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogUpdate

  const history=useNavigate()

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BLOG_UPDATE_RESET })
      history('/admin/bloglist')
    } else {
      if (!blog.name || blog._id !== id) {
        dispatch(listBlogDetails(id))
      } else {
        setName(blog.name)
        setPrice(blog.price)
        setImage(blog.image)
        // setBrand(product.brand)
        // setCategory(product.category)
        setcountinstock(blog.countinstock)
        setDescription(blog.description)
      }
    }
  }, [dispatch, history, id, blog, successUpdate])

  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateBlog({
        _id: id,
        name,
        price,
        image,
        // brand,
        // category,
        description,
        countinstock,
      })
    )
  }




  return (
    <>
    <Link to='/admin/bloglist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Blog</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter title'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              {/* <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File> */}
              {uploading && <Loader />}
            </Form.Group>

            {/* <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

            {/* <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countinstock}
                onChange={(e) => setcountinstock(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

            {/* <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group controlId='description'>
              <Form.Label>Details</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter details'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    
    </>
  )
}

export default BlogEditScreen