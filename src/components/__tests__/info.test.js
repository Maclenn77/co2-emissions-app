/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Info from '../info';

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
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Info />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
