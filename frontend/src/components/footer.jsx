import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



const footer = () => {
    
    
    return (
        <>
           
        <footer 
        style={{backgroundColor:"#1D4B2C",height:"200px"}}
    >
        <br />
        <Container >
                <Row >
                   
                    
                    <Col md='12' className="text-center">
                        <span style={{color:"white"}}>Copyright &copy; Team Garden Mart</span>
                    
                    </Col>
                    <br />
                    <br />
                    <Col md='12' className="text-left">
                        <span style={{color:"#D1D5D5"}}>Address:Office no.ABC,Building XYZ,Lahore,Pakistan</span>
                    
                    </Col>
                    <Col md='12' style={{textAlign:"right"}}>
                        <span style={{color:"#D1D5D5"}}>Email Address:teamgardenmart@gardenmart.com</span>
                    
                    </Col>
                    </Row>
                    {/* <br />
                    <br /> */}

                    

                  
                
            </Container>
        </footer>

            
        </>
    )
}

export default footer

