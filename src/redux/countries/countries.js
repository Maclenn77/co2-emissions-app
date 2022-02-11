import { fetchRegionData } from '../api/handler';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

const initialState = [];

const getCountriesData = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const getCountriesDataApi = (code) => async (dispatch) => {
  const regionDataList = [];
  const data = await fetchRegionData(code);
  data.forEach((item) => {
    regionDataList.push({
      id: item,
      iso: item.countryiso3code,
      label: item.country.value,
      date: item.date,
      co2Emissions: item.value,
    });
  });
  dispatch(getCountriesData(regionDataList));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
