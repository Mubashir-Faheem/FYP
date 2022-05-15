
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {listFertilizers } from "../actions/fertilizerAction";
import { Row, Col } from "react-bootstrap";
import FertilizerScreen from "./FertilizerScreen";
import Loader from "../components/shared/loader";
import Message from "../components/shared/message";


const FertilizerHome = () => {
    const dispatch = useDispatch();
    const fertilizerList = useSelector((state) => state.fertilizerList);
    const { loading, error, fertilizers} = fertilizerList;
  
    useEffect(() => {
      dispatch(listFertilizers());
    }, [dispatch]);
    console.log("hello",fertilizers)
  
    // let arr = [3, 4, 5, 6];
  
  // let modifiedArr = arr.map(function(element){
  //     return element *3;
  // });
  
  
    return (
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          
          <Row>
            {
            fertilizers.map((fertilizer) => (
              
              <Col key={fertilizer._id} md={3}>
                <FertilizerScreen fertilizer={fertilizer} />
              </Col>
            ))}
          </Row>
        )}
  
  
  
      </>
    );
  };
  
  
  export default FertilizerHome