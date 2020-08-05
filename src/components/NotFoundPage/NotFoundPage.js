import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Header from '../Header/Header';

const NotFoundPage = () => (
  <Container>
    <Header hideSearchForm={true} />

    <Card className="my-3" bg="light">
      <Card.Body>
        <Card.Title className="text-primary">Page not found</Card.Title>

        <Card.Text className="text-secondary mb-1">
          <small className="text-muted">
            Looks like something went wrong and we can't find the page you're
            looking for. You can go back to main page by clicking the button.
          </small>
        </Card.Text>

        <Link to="/">
          <Button variant="outline-primary my-3">Home page</Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);

export default NotFoundPage;
