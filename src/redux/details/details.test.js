import reducer from './details';

describe('Details reducer', () => {
  test('Details reducer returns an empty state when no case is matched', () => {
    const initialState = [];
    expect(reducer(initialState, { type: '' })).toEqual(initialState);
  });

  test('Details reducer returns new state when FETCH_COUNTRIES case is matched', () => {
    const FETCH_DETAILS = 'FETCH_DETAILS';
    expect(reducer([], { type: FETCH_DETAILS, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});
