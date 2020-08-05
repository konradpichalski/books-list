import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const App = () => (
  <Container>
    <Row>
      <Col>
        <h1 className="h1 primary">App</h1>
        <Button variant="primary">This is a test</Button>
      </Col>
    </Row>
  </Container>
);

export default App;
