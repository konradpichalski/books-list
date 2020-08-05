import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => (
  <Row>
    <Col className="d-flex align-middle py-5">
      <Spinner
        animation="border"
        variant="primary"
        role="status"
        className="my-auto mx-auto"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Col>
  </Row>
);

export default Loader;
