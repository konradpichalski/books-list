import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NoSearchResults = ({ handleReset }) => (
  <Card className="my-3" bg="light">
    <Card.Body>
      <Card.Title className="text-primary">Nothing found</Card.Title>

      <Card.Text className="text-secondary mb-1">
        <small className="text-muted">
          We can't find what you're looking for. You can reset the page by using
          the button.
        </small>
      </Card.Text>

      <Button variant="outline-primary my-3" onClick={handleReset}>
        Reset
      </Button>
    </Card.Body>
  </Card>
);

export default NoSearchResults;
