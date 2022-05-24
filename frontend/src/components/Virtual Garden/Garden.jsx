import React, { useState, useEffect } from "react";
// import "./App.css";
import Grid from "./Grid.css";
//import Rent from "./screens/Rent";
import Video from "../../screens/Videos";
import Table from "./Table";
// import Renting from "./screens/Renting";

const Garden=()=> {
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
    <div>
      
       {/* <Video/> */}
      {/* <Grid    
        data={data}
      /> */}
      <Table data={data}/>
      {/* <Renting  data={data}/> */}
    </div>
  );
}

export default Garden;