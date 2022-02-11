import { fetchRegionData } from '../api/handler';

const FETCH_CO2DATA = 'FETCH_CO2DATA';

const initialState = [];

const getCo2Data = (payload) => ({
  type: FETCH_CO2DATA,
  payload,
});

export const getCo2DataApi = (code) => async (dispatch) => {
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
  dispatch(getCo2Data(regionDataList));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CO2DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
