
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {listSeeds  } from "../actions/seedActions";
import { Row, Col } from "react-bootstrap";
import SeedScreen from "./SeedScreen";
import Loader from "../components/shared/loader";
import Message from "../components/shared/message";


const SeedHome = () => {
    const dispatch = useDispatch();
    const seedList = useSelector((state) => state.seedList);
    const { loading, error, seeds } = seedList;
  
    useEffect(() => {
      dispatch(listSeeds());
    }, [dispatch]);
    console.log("hello",seeds)
  
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
            seeds.map((seed) => (
              
              <Col key={seed._id} md={3}>
                <SeedScreen seed={seed} />
              </Col>
            ))}
          </Row>
        )}
  
  
  
      </>
    );
  };
  
  
  export default SeedHome