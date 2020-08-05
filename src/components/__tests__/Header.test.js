import React from 'react';
import { mount } from 'enzyme';

import Header from '../Header/Header';

let wrapped;

// the function to create a component for testing
// so that we can use different props
const testSetup = (props) => {
  return mount(<Header {...props} />);
};

describe('Header component with empty string input value', () => {
  beforeEach(() => {
    wrapped = testSetup({ hideSearchForm: false, searchValue: '' });
  });

  it('has one form element', () => {
    const elem = wrapped.find('form');

    expect(elem.length).toEqual(1);
  });

  it('has one input element', () => {
    const elem = wrapped.find('input');

    expect(elem.length).toEqual(1);
  });

  it('has one button that is disabled', () => {
    const elem = wrapped.find('button');

    expect(elem.length).toEqual(1);
    expect(elem.props().disabled).toEqual(true);
  });

  it('has input element with empty string as a value', () => {
    const elem = wrapped.find('input');

    expect(elem.props().value).toEqual('');
  });
});

describe('Header with some text typed into search input', () => {
  beforeEach(() => {
    wrapped = testSetup({ hideSearchForm: false, searchValue: 'test' });
  });

  it('has the right value in input field', () => {
    const elem = wrapped.find('input');

    expect(elem.props().value).toEqual('test');
  });

  it('has a button that is not disabled', () => {
    const elem = wrapped.find('button');

    expect(elem.length).toEqual(1);
    expect(elem.props().disabled).toEqual(false);
  });
});

describe('Header that should have search form hidden', () => {
  beforeEach(() => {
    wrapped = testSetup({ hideSearchForm: true, searchValue: '' });
  });

  it('has no form element', () => {
    const elem = wrapped.find('form');

    expect(elem.length).toEqual(0);
  });

  it('has no input element', () => {
    const elem = wrapped.find('input');

    expect(elem.length).toEqual(0);
  });

  it('has no button', () => {
    const elem = wrapped.find('button');

    expect(elem.length).toEqual(0);
  });
});
