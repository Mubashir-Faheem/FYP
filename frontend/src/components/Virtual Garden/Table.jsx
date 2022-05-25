
import React, { useState } from "react";
import {Card,Col,Row} from "react-bootstrap"
// import "./SearchBar";
// import SearchBar from "./SearchBar";
import SearchPage from "./SearchPage";

import "./Grid.css";

const Table = ({ data }) => {
  const [garden, setGarden] = useState({});
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [plant, setPlant] = useState();

  function handleTitle(title) {
    let i = data.find((d) => d.name == title);
    if (i.name == title) {
      const value = i.description;
      alert(value);
    }
    setPlant(i); //i is bring all data of selected plant i is selected plant
    console.log(i);
  }

  const createGarden = () => {
    let obj = {};
    if (col > 0 && row > 0) {
      for (var i = 0; i < row; i++) {
        obj[i] = makeCols(col);
      }
      setGarden(obj);
    } else {
      alert("value must be greater then 0");
    }
  };

  const makeCols = (col) => {
    let arr = [];
    for (let i = 0; i < col; i++) {
      arr.push({
        url: undefined,
        color: "green",
        isSelected: false,
        title: "img" + i,
      });
    }
    return arr;
  };

  const handleClick = (row, colIndex) => {
    if (plant && plant.image) {
      let obj = { ...garden };
      let target = obj[row]; //row comes on which cell it is clicked
      let col = target[colIndex]; // clicked column appear
      col["color"] = "yellow";
      col["url"] = plant.image;
      col["title"] = plant.name;
      target.splice(colIndex, 1, col); //target are columns all columns of the row old colIndex is removed and new col is replaced with all data
      obj[row] = target; //fresh array with new column is place in that row
      setGarden(obj);
    } else {
      alert("please select plant ");
    }
  };

  let rows = Object.keys(garden);
  return (
    <div >
        <br />
        <br />
        <Col style={{marginLeft:'400px',}}>
      <SearchPage 
        data={data}
        placeholder="Search here ..."
        setTitle={handleTitle}
      ></SearchPage>
      </Col>
<Row>
      <Col md={3}>
      <h1 style={{animation: 'growth 3s',
  animationFillMode: 'backwards',
  fontSize: '4rem',color:'#1D4B2C'}}> Welcome To Virtual Garden</h1>
      </Col>
      <br /> <br />
      {/* <Col style={{marginLeft:'100px'}}> <SearchPage/></Col> */}
      <Col style={{marginLeft:'500px'}}>
      <Card style={{height:'300px',backgroundImage:"url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500')"}}>
          
     <h3 style={{color:'#F5FFFF'}}>Set Rows</h3>
      <input
        align="end"
        type="number"
        title="Set Row"
        id="dropdown-menu-align-end"
        onChange={(e) => setRow(e.target.value)}
      />
      <br />
         <h3 style={{color:'#F5FFFF'}}>Set Cols</h3> 
      <input
        align="end"
        type="number"
        title="Set Col"
        id="dropdown-menu-align-end"
        onChange={(e) => setCol(e.target.value)}
      />
      <br />
      <br />
      <button type="button" className="btn btn-success" onClick={(e) => createGarden()}>create your garden</button>
      </Card>
      </Col>
      <br />
      <table id="myTable" style={{backgroundColor:'rgb(71, 101, 71)'}}>
        {rows.map((row) => {
          return (
            <tr key={row}>
              {garden[row].map((col, index) => {
                return (
                  <td
                    // style={{ backgroundColor: col.color }}
                    key={index}
                    onClick={(e) => handleClick(row, index)}
                  >
                    {col.url && <img src={col.url} alt={col.title} />}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
      </Row>
    </div>
    
  );
};
export default Table;

