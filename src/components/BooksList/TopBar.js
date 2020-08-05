import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TopBar = () => (
  <Row className="py-4">
    <Col xs={12} sm={3} lg={6} className="d-flex align-middle">
      <p className="h5 my-auto">
        <b className="text-primary">100</b> books
      </p>
    </Col>
    <Col className="d-flex justify-content-end align-middle">
      <Button className="mr-3 my-3 flex-fill">Previous page</Button>
      <span className="text-secondary vertical-center my-auto mx-1">
        Page <b>1</b> / <b>10</b>
      </span>
      <Button className="ml-3 my-3 flex-fill">Next page</Button>
    </Col>
  </Row>
);

export default TopBar;
