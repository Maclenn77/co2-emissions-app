import { fetchRegionData } from './api/handler';

const FETCH_CO2EMISSIONS = 'FETCH_CO2EMISSIONS';

const initialState = [];

export const getCo2Data = (payload) => ({
  type: FETCH_CO2EMISSIONS,
  payload,
});

export const getCo2DataApi = (regions) => async (dispatch) => {
  const regionData = await fetchRegionData(regions);
  const regionDataList = [];
  regionData[1].forEach((item) => {
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
    case FETCH_CO2EMISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
