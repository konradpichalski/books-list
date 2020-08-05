import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../Header/Header';

const BooksList = () => (
  <Container>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
  </Container>
);

export default BooksList;
