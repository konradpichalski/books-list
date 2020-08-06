import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader/Loader';

describe('Loader component', () => {
  it('displays the spinner', () => {
    const wrapped = shallow(<Loader />);

    const elem = wrapped.find('Spinner');

    expect(elem.length).toEqual(1);
  });
});
