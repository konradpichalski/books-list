import React from 'react';
import { mount } from 'enzyme';

import NoSearchResults from '../BooksList/NoSearchResults';

let wrapped;

describe('NoSearchResults component', () => {
  beforeEach(() => {
    wrapped = mount(<NoSearchResults />);
  });

  it('renders correct header message', () => {
    const elem = wrapped.find('.card-title');

    const correctText = 'Nothing found';

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });

  it('renders correct text message', () => {
    const elem = wrapped.find('.card-text');

    const correctText =
      "We can't find what you're looking for. You can reset the page by using the button.";

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });

  it('renders a button', () => {
    const elem = wrapped.find('button');

    expect(elem.length).toEqual(1);
  });
});
