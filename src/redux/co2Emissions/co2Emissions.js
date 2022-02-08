import fetchCo2Data from './api/handler';

const FETCH_CO2EMISSIONS = 'FETCH_CO2EMISSIONS';

const initialState = [];

export const getCo2Data = (payload) => ({
  type: FETCH_CO2EMISSIONS,
  payload,
});

export const getCo2DataApi = (country) => async (dispatch) => {
  await fetchCo2Data(country).then((data) => dispatch(getCo2Data(data)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CO2EMISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
