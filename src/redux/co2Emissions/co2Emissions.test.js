import reducer from './co2Emissions';

describe('Co2 Emission reducer', () => {
  test('co2Emissions reducer returns an empty state when no case is matched', () => {
    const initialState = [];
    expect(reducer(initialState, { type: '' })).toEqual(initialState);
  });

  test('co2Emissions reducer returns new state when FETCH_CO2DATA case is matched', () => {
    const FETCH_CO2DATA = 'FETCH_CO2DATA';
    expect(reducer([], { type: FETCH_CO2DATA, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});
