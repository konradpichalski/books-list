import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TopBar = ({
  currentPage,
  pageCount,
  booksCount,
  handlePrevPage,
  handleNextPage,
  handleReset,
  searchText,
}) => (
  <Row className="py-4">
    <Col xs={12} sm={3} lg={6} className="d-flex align-middle">
      <p className="h5 my-auto">
        <b className="text-primary">{booksCount}</b>{' '}
        {booksCount > 1 || booksCount === 0 ? 'books' : 'book'}
        {searchText !== '' && ' found'}
      </p>

      {searchText !== '' && (
        <Button className="ml-3 my-auto" onClick={handleReset}>
          Reset
        </Button>
      )}
    </Col>
    <Col className="d-flex justify-content-end align-middle">
      <Button
        className="mr-2 my-3"
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
      >
        Previous page
      </Button>

      <span className="text-secondary vertical-center my-auto mx-2">
        Page {currentPage} / {pageCount}
      </span>

      <Button
        className="ml-2 my-3"
        disabled={currentPage >= pageCount}
        onClick={handleNextPage}
      >
        Next page
      </Button>
    </Col>
  </Row>
);

TopBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  booksCount: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default TopBar;
