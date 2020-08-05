import React from 'react';
import { mount } from 'enzyme';

import TopBar from '../BooksList/TopBar';

let wrapped;

const mockParams = {
  currentPage: 1,
  pageCount: 100,
  booksCount: 2000,
  searchText: '',
};

// the function to create a component for testing
// so that we can use different props
const testSetup = (props) => {
  return mount(<TopBar {...props} />);
};

describe('TopBar component with empty search text passed on as a prop', () => {
  const { currentPage, pageCount, booksCount } = mockParams;

  beforeEach(() => {
    wrapped = testSetup(mockParams);
  });

  it('renders correct number of total books', () => {
    const elem = wrapped.find('p');

    const correctText = `${booksCount} books`;

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });

  it('only has two buttons', () => {
    const elem = wrapped.find('Button');

    expect(elem.length).toEqual(2);
  });

  it('renders correct pages text', () => {
    const elem = wrapped.find('span');

    const correctText = `Page ${currentPage} / ${pageCount}`;

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });
});

describe('TopBar with search text passed on as a prop', () => {
  const searchText = 'Mock';
  const { booksCount } = mockParams;

  beforeEach(() => {
    wrapped = testSetup({ ...mockParams, searchText });
  });

  it('renders correct number of total books with a term found', () => {
    const elem = wrapped.find('p');

    const correctText = `${booksCount} books found`;

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });

  it('renders 3 buttons', () => {
    const elem = wrapped.find('Button');

    expect(elem.length).toEqual(3);
  });
});
