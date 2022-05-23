import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/shared/message'
import Loader from '../components/shared/loader'
import Paginate from '../components/shared/Paginate'
import {
  createRenting,listRentings,deleteRenting
} from '../actions/rentingAction'
import {RENTING_CREATE_RESET} from "../constants/rentingConstant"
// import { PRODUCT_CREATE_RESET } from '../constants/productConstant'
import {useParams,useNavigate} from 'react-router-dom'


const RentingListScreen = () => {
    const {pageNumber} = useParams().pageNumber || 1

    const dispatch = useDispatch()

  const rentingList = useSelector((state) => state.rentingList)
  const { loading, error, rentings, page, pages } = rentingList

  const rentingDelete = useSelector((state) => state.rentingDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = rentingDelete
  
  const rentingCreate = useSelector((state) => state.rentingCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    renting: createdRenting,
  } = rentingCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history=useNavigate()
  useEffect(() => {
    dispatch({ type: RENTING_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history('/login')
    }

    if (successCreate) {
      history(`/admin/service/${createdRenting._id}/edit`)
    } else {
      dispatch(listRentings('', pageNumber))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdRenting,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteRenting(id))
    }
  }

  const createRentingHandler = () => {
    dispatch(createRenting())
  }




  return (
    <>
     <Row className='align-items-center'>
        <Col>
          <h1>Services</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createRentingHandler}>
            <i className='fas fa-plus'></i> Create Service
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                {/* <th>CATEGORY</th>
                <th>BRAND</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rentings.map((renting) => (
                <tr key={renting._id}>
                  <td>{renting._id}</td>
                  <td>{renting.name}</td>
                  <td>Rs.{renting.price}</td>
                  {/* <td>{product.category}</td>
                  <td>{product.brand}</td> */}
                  
                  <td>
                    <LinkContainer to={`/admin/service/${renting._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(renting._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
                
              ))}
            </tbody>
            
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
          
        </>
      )}
    
    
    </>
  )
}

export default RentingListScreen