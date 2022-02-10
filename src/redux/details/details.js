import { fetchCountryData } from '../api/handler';

const FETCH_DETAILS = 'FETCH_DETAILS';

const initialState = [];

const getDetailsData = (payload) => ({
  type: FETCH_DETAILS,
  payload,
});

export const getCo2Details = (code) => async (dispatch) => {
  const countryDataList = [];
  const data = await fetchCountryData(code);
  data.forEach((item) => {
    countryDataList.push({
      id: item,
      iso: item.countryiso3code,
      label: item.country.value,
      date: item.date,
      co2Emissions: item.value,
    });
  });
  dispatch(getDetailsData(countryDataList));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
