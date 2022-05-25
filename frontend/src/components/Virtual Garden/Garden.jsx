import React, { useState, useEffect } from "react";
// import "./App.css";
import Grid from "./Grid.css";
import {Row,Col} from 'react-bootstrap'
//import Rent from "./screens/Rent";
import Video from "../../screens/Videos";
import { listProducts } from "../../actions/productActions"
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import SearchPage from "./SearchPage";
// import Renting from "./screens/Renting";

const Garden=()=> {

  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);
  // console.log(products)
  const [data, setData] = useState([]);
  let fetchData = async () => {
    let resp = await fetch(
      "https://mubashir-garden-mart.herokuapp.com/api/products"
    );
    let data = await resp.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <div>
      
       {/* <Video/> */}
      {/* <Grid    
        data={data}
      /> */}
      {
       <Table data={data}/>
      }
          
      {/* <Renting  data={data}/> */}
    </div>

    </>
  );
}

export default Garden;

