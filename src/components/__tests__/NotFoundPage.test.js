import React from 'react';
import { mount } from 'enzyme';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

let wrapped;

describe('NotFoundPage component', () => {
  beforeEach(() => {
    wrapped = mount(<NotFoundPage />);
  });

  it('displays the correct title', () => {
    const elem = wrapped.find('.card-title');

    const correctText = 'Page not found';

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });

  it('displays the correct body text', () => {
    const elem = wrapped.find('.card-text');

    const correctText =
      "Looks like something went wrong and we can't find the page you're looking for. You can go back to main page by clicking the button.";

    expect(elem.hostNodes().first().text()).toEqual(correctText);
  });

  it('has one button', () => {
    const elem = wrapped.find('button');

    expect(elem.hostNodes().first().length).toEqual(1);
  });
});
