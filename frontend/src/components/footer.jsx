import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const footer = () => {
    return (
        <>
        <footer>
            <Container>
                <Row>
                    <Col md='12' className="text-center">
                        <span >Copyright &copy; Team Kitchen Garden</span>
                    
                    </Col>
                </Row>
            </Container>
        </footer>

            
        </>
    )
}

export default footer
