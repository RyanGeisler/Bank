import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});
