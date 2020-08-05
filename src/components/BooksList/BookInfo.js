import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BookInfo = () => (
  <Col md={12} md={6} lg={4}>
    <Card className="my-3" bg="light">
      <Card.Body>
        <Card.Title className="text-primary">Title</Card.Title>
        <Card.Subtitle className="mb-4">Author(s): Author</Card.Subtitle>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Year: <b>2020</b>
          </small>
        </Card.Text>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Location: <b>City</b>, <b>Country</b>
          </small>
        </Card.Text>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Number of pages: <b>100</b>
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default BookInfo;
