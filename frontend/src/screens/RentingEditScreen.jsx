import axios from 'axios'
import React, { useState, useEffect,Component,Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/shared/message'
import Loader from '../components/shared/loader'
import FormContainer from '../components/shared/FormContainer'
import { listRentingDetails,updateRenting } from '../actions/rentingAction'
import { RENTING_UPDATE_RESET } from '../constants/rentingConstant'
import {useNavigate,useParams} from 'react-router-dom'


const RentingEditScreen = () => {

    const {id}=useParams()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  // const [brand, setBrand] = useState('')
  // const [category, setCategory] = useState('')
  const [countinstock, setcountinstock] = useState(0)
  const [tool, setTool] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const rentingDetails = useSelector((state) => state.rentingDetails)
  const { loading, error, renting } = rentingDetails

  const rentingUpdate = useSelector((state) => state.rentingUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = rentingUpdate

  
  const history=useNavigate()

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: RENTING_UPDATE_RESET })
      history('/admin/rentinglist')
    } else {
      if (!renting.name || renting._id !== id) {
        dispatch(listRentingDetails(id))
      } else {
        setName(renting.name)
        setPrice(renting.price)
        setImage(renting.image)
        // setBrand(product.brand)
        // setCategory(product.category)
        setcountinstock(renting.countinstock)
        setTool(renting.tool)
      }
    }
  }, [dispatch, history, id, renting, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateRenting({
        _id: id,
        name,
        price,
        image,
        // brand,
        // category,
        tool,
        countinstock,
      })
    )
  }




  return (
    <>
    <Link to='/admin/rentinglist' className='btn btn-dark my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1 style={{color:'#1D4B2C'}}>Edit Service</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name} required
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price} required
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image} required
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

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countinstock} required
                onChange={(e) => setcountinstock(e.target.value)}
              ></Form.Control>
            </Form.Group>

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
              <Form.Label>Tool Required</Form.Label>
              <Form.Control
                type='text'
                placeholder='Any extra tool required?'
                value={tool} required
                onChange={(e) => setTool(e.target.value)}
              ></Form.Control>
            </Form.Group>
<br />
            <Button type='submit' variant='primary' className='btn-success'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    
    </>
  )
}

export default RentingEditScreen