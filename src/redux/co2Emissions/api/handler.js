import retrieveCodes from './codes';

const apiUrl = (countries) => `http://api.worldbank.org/v2/country/${countries}/indicator/EN.ATM.CO2E.PC?format=json`;

const apiUrlRegion = (region) => {
  const url = `${apiUrl(region)}&date=2018&per_page=100`;
  return url;
};

export const fetchRegionData = async (code) => {
  const codes = retrieveCodes(code);
  const data = await fetch(apiUrlRegion(codes)).then((response) => response.json());
  return data[1];
};

export const fetchCountryData = async (country) => {
  const data = await fetch(apiUrl(country)).then((response) => response.json());
  return data[1];
};
