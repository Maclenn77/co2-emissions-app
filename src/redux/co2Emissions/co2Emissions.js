import { fetchRegionData, fetchCountryData } from './api/handler';

const FETCH_CO2BYREGION = 'FETCH_CO2BYREGION';
const FETCH_CO2BYCOUNTRY = 'FETCH_CO2BYCOUNTRY';

const initialState = [];

const getCo2RegionData = (payload) => ({
  type: FETCH_CO2BYREGION,
  payload,
});

const getCo2Country = (payload) => ({
  type: FETCH_CO2BYCOUNTRY,
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
  dispatch(getCo2RegionData(regionDataList));
};

export const getCo2CountryApi = (code) => async (dispatch) => {
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
  dispatch(getCo2Country(countryDataList));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CO2BYREGION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
