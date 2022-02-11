import reducer from './countries';

describe('Countries reducer', () => {
  test('Countries reducer returns an empty state when no case is matched', () => {
    const initialState = [];
    expect(reducer(initialState, { type: '' })).toEqual(initialState);
  });

  test('Countries reducer returns new state when FETCH_COUNTRIES case is matched', () => {
    const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
    expect(reducer([], { type: FETCH_COUNTRIES, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});
