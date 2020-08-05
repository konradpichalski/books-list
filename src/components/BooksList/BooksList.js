import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import api from '../../api/api';

import Header from '../Header/Header';
import TopBar from './TopBar';
import BookInfo from './BookInfo';

const BooksList = () => {
  // constants
  const itemsPerPage = 20;
  const location = useLocation();
  const locationSearch = queryString.parse(location.search);
  const { page } = locationSearch;

  // state
  // convert the page to an integer for proper type
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const [books, setBooks] = useState([]);
  const [booksCount, setBooksCount] = useState(0);
  const [pageCount, setPageCout] = useState(1);

  // useEffect calls
  useEffect(() => {
    const fetchData = async () => {
      const dataset = await api.fetchBooks({
        page: currentPage,
        itemsPerPage: 20,
        filters: [],
      });

      const {
        data: { books, count },
      } = dataset;

      setBooks(books);
      setBooksCount(count);

      // using Math.ceil to round to the next number so that last page is also visible
      setPageCout(Math.ceil(count / itemsPerPage));
    };

    fetchData();
  }, []);

  // render helper functions
  const renderBooks = () =>
    books.map((book) => {
      return <BookInfo key={book.id} book={book} />;
    });

  return (
    <Container>
      <Header />

      <TopBar
        currentPage={currentPage}
        pageCount={pageCount}
        booksCount={booksCount}
      />

      <Row>{renderBooks()}</Row>
    </Container>
  );
};

export default BooksList;
