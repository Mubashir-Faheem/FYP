
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Products from "./../products"
// import Products from "./../../../backend/data/products"
import ProductScreen from './ProductScreen' 


//  function HomeScreen(){
    
    // // const [prod,setProducts]=UseState([]);


    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${count} times`;
    //     console.log("dsfsdfsd");
    //   });
const HomeScreen=()=>{
    const [Products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async () => {
            // const {data}=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
            const resp=await axios.get('https://mubashir-garden-mart.herokuapp.com/api/products');
            console.log(resp);
            setProducts(resp.data);
        }
        fetchProducts();
    },[]);

//}
    return (
        <>

            <Row>

          

                {
                    
                   Products.map(product =>(
                       <Col key={product._id} md={4}>
                       <h3>
                           <ProductScreen product={product}/>
                       </h3>
                       </Col>
                   ))
                }
            </Row>
        </>
    )
}

export default HomeScreen
