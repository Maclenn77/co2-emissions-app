/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Region from '../region';

const mockStore = configureMockStore();

const store = mockStore({
  co2Emissions: {
    0: {
      id: 0,
      iso: 'mex',
      label: 'Mexico',
      date: 2018,
      co2Emissions: 6.0000,
    },
  },
});

it('renders correctly', () => {
  const mockRegion = {
    iso: 'MCK',
    label: 'Mock Region',
    date: 2018,
    co2Emissions: 6.0000,
  };
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Region region={mockRegion} />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
