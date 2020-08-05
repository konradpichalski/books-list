import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => (
  <Row>
    <Col>
      <Navbar
        bg="primary"
        variant="dark"
        className="justify-content-between"
        expand="lg"
      >
        <Navbar.Brand>Books list</Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </Col>
  </Row>
);

export default Header;
