import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = ({
  hideSearchForm,
  onFormSubmit,
  onFormControlChange,
  searchValue,
}) => (
  <Row>
    <Col>
      <Navbar
        bg="primary"
        variant="dark"
        className="justify-content-between"
        expand="lg"
      >
        <Navbar.Brand>Books list</Navbar.Brand>

        {!hideSearchForm && (
          <Form inline onSubmit={onFormSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => onFormControlChange(e.target.value)}
              value={searchValue}
            />
            <Button
              variant="outline-light"
              type="submit"
              disabled={searchValue === ''}
            >
              Search
            </Button>
          </Form>
        )}
      </Navbar>
    </Col>
  </Row>
);

Header.propTypes = {
  hideSearchForm: PropTypes.bool,
  onFormSubmit: PropTypes.func,
  onFormControlChange: PropTypes.func,
  searchValue: PropTypes.string,
};

export default Header;
