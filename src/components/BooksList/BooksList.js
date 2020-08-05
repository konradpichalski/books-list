import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../Header/Header';
import TopBar from './TopBar';
import BookInfo from './BookInfo';

const BooksList = () => (
  <Container>
    <Header />

    <TopBar />

    <Row>
      <BookInfo />
    </Row>
  </Container>
);

export default BooksList;
