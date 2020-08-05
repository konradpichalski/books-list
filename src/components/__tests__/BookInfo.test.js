import React from 'react';
import { mount } from 'enzyme';

import BookInfo from '../BooksList/BookInfo';

const mockBookOneAuth = {
  book: {
    book_author: ['Mock author'],
    book_title: 'Mock title',
    book_publication_year: 2020,
    book_publication_country: 'UK',
    book_publication_city: 'London',
    book_pages: 100,
  },
};

const mockBookTwoAuth = {
  book: {
    ...mockBookOneAuth.book,
    book_author: ['Mock author', 'Mock author 2'],
  },
};

// the function to create a component for testing
// so that we can use different props
const testSetup = (props) => {
  return mount(<BookInfo {...props} />);
};

let wrapped;

describe('BookInfo component with one author', () => {
  const {
    book_title,
    book_author,
    book_publication_year,
    book_publication_city,
    book_publication_country,
    book_pages,
  } = mockBookOneAuth.book;

  beforeEach(() => {
    wrapped = testSetup(mockBookOneAuth);
  });

  it('Renders correct title', () => {
    const authorElem = wrapped.find('.card-title');

    expect(authorElem.hostNodes().first().text()).toEqual(book_title);
  });

  it('Renders correct author when there is one', () => {
    const authorElem = wrapped.find('.card-subtitle');

    const correctText = `Author: ${book_author[0]}`;

    expect(authorElem.hostNodes().first().text()).toEqual(correctText);
  });

  it('Renders correct year', () => {
    const authorElem = wrapped.find('.card-text');

    const correctText = `Year: ${book_publication_year}`;

    expect(authorElem.at(0).text()).toEqual(correctText);
  });

  it('Renders correct location', () => {
    const authorElem = wrapped.find('.card-text');

    const correctText = `Location: ${book_publication_city}, ${book_publication_country}`;

    expect(authorElem.at(1).text()).toEqual(correctText);
  });

  it('Renders correct pages', () => {
    const authorElem = wrapped.find('.card-text');

    const correctText = `Number of pages: ${book_pages}`;

    expect(authorElem.at(2).text()).toEqual(correctText);
  });
});

describe('BookInfo component with two authors', () => {
  const { book_author } = mockBookTwoAuth.book;

  beforeEach(() => {
    wrapped = testSetup(mockBookTwoAuth);
  });

  it('Renders correct authors when there are more than one', () => {
    const authorElem = wrapped.find('.card-subtitle');

    const correctText = `Authors: ${book_author[0]}; ${book_author[1]}`;

    expect(authorElem.hostNodes().first().text()).toEqual(correctText);
  });
});
