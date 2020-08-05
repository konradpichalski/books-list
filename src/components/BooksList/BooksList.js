import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import api from '../../api/api';

import Header from '../Header/Header';
import TopBar from './TopBar';
import BookInfo from './BookInfo';
import Loader from '../Loader/Loader';

const BooksList = () => {
  // constants and state
  const itemsPerPage = 20;
  const location = useLocation();
  const history = useHistory();
  const locationSearch = queryString.parse(location.search);
  const { page, search } = locationSearch;
  const filterDefault = { type: 'all', values: [] };

  // convert the page to an integer for proper type
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [booksCount, setBooksCount] = useState(0);
  const [pageCount, setPageCout] = useState(1);
  // searchValue is set to control the form in the header
  const [searchValue, setSerarchValue] = useState(search || '');
  // searchText is set to display the results in TopBar
  const [searchText, setSearchText] = useState(search || '');
  const [filters, setFilters] = useState(
    search !== '' && search ? [{ ...filterDefault, values: [search] }] : [],
  );

  // useEffect calls
  useEffect(() => {
    // first set loading to true each time this effect is used
    setLoading(true);

    const fetchData = async () => {
      const dataset = await api.fetchBooks({
        page: currentPage,
        itemsPerPage: 20,
        filters,
      });

      const {
        data: { books, count },
      } = dataset;

      setBooks(books);
      setBooksCount(count);

      // using Math.ceil to round to the next number so that last page is also visible
      setPageCout(Math.ceil(count / itemsPerPage));

      // once the data has been fetched set the loading to false
      setLoading(false);

      // check if the data was fetched due to search
      if (searchValue !== '') {
        // pass the text on to display the resuls
        setSearchText(searchValue);
      }
    };

    fetchData();
  }, [currentPage, filters]);

  useEffect(() => {
    history.push(`?page=${currentPage}&search=${searchText}`);
  }, [currentPage, history, searchText]);

  // functions
  const handleClickPreviousPage = () => setCurrentPage(currentPage - 1);
  const handleClickNextPage = () => setCurrentPage(currentPage + 1);

  const handleReset = () => {
    setFilters([]);
    setSerarchValue('');
    setSearchText('');
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // check if you should do the search at all
    if (searchValue !== '') {
      // reset current page to 1
      setCurrentPage(1);
      // these are default filters to search by
      setFilters([{ ...filterDefault, values: [searchValue] }]);
      // update the query params in the browser
      history.push(`?page=${currentPage}&search=${searchText}`);
    }
  };

  // render helper functions
  const renderBooks = () =>
    books.map((book) => {
      return <BookInfo key={book.id} book={book} />;
    });

  return (
    <Container>
      <Header
        searchValue={searchValue}
        onFormControlChange={setSerarchValue}
        onFormSubmit={handleSearchSubmit}
      />

      <TopBar
        currentPage={currentPage}
        pageCount={pageCount}
        booksCount={booksCount}
        handlePrevPage={handleClickPreviousPage}
        handleNextPage={handleClickNextPage}
        handleReset={handleReset}
        searchText={searchText}
      />

      {loading ? <Loader /> : <Row>{renderBooks()}</Row>}
    </Container>
  );
};

export default BooksList;
