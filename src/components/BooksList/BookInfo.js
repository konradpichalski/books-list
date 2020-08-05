import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BookInfo = ({
  book: {
    book_author,
    book_title,
    book_publication_year,
    book_publication_country,
    book_publication_city,
    book_pages,
  },
}) => (
  <Col md={12} md={6} lg={4}>
    <Card className="my-3" bg="light">
      <Card.Body>
        <Card.Title className="text-primary">{book_title}</Card.Title>
        <Card.Subtitle className="mb-4">
          {book_author.length > 1 ? 'Authors' : 'Author'}:{' '}
          {book_author.map((author, index) =>
            index < book_author.length - 1 ? `${author}; ` : author,
          )}
        </Card.Subtitle>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Year: <b>{book_publication_year}</b>
          </small>
        </Card.Text>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Location: <b>{book_publication_city}</b>,{' '}
            <b>{book_publication_country}</b>
          </small>
        </Card.Text>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Number of pages: <b>{book_pages}</b>
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

BookInfo.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookInfo;
