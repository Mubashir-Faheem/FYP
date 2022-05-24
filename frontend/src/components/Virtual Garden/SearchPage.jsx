import React from "react";
import {Col} from 'react-bootstrap'
// import { MDBInput, MDBCol } from "mdbreact";

const SearchPage = () => {
  return (
    <Col md="6">
      <input hint="Search" type="text" containerClass="mt-0" />
    </Col>
  );
}

export default SearchPage;