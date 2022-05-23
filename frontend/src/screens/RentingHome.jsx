import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {listRentings} from "../actions/rentingAction"
import { Row, Col } from "react-bootstrap";
import Loader from "../components/shared/loader";
import Message from "../components/shared/message";
// import "./App.css";
//import Grid from "./screens/Grid";
//import Rent from "./screens/Rent";
//import Video from "./screens/video";

import RentingScreen from "./RentingScreen";

const RentingHome=()=> {
  // const [data, setData] = useState([]);
  // let fetchData = async () => {
  //   let resp = await fetch(
  //     "https://mubashir-garden-mart.herokuapp.com/api/services"
  //   );
  //   let data = await resp.json();
  //   setData(data);
  // };

  const dispatch = useDispatch();
  const rentingList = useSelector((state) => state.rentingList);
  const { loading, error, rentings } = rentingList;

  useEffect(() => {
  //   fetchData();
  // }, []);

  dispatch(listRentings());
}, [dispatch]);
console.log(rentings)
  return (
    // <div>
      
    //    {/* <Video/> */}
    //   {/* <Grid    
    //     data={data}
    //   /> */}
    //   {/* <Table data={data}/> */}
    //   <RentingScreen data={data}/>
      
    // </div>
    <>
    {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        
        <Row>
           <h1>Renting Services</h1>
          {
          rentings.map((renting) => (
            
            <Col key={renting._id} md={3}>
              <RentingScreen renting={renting} />
            </Col>
          ))}
        </Row>
      )}
    
    
    </>
  );
}

export default RentingHome;
