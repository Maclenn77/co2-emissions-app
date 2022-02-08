const apiUrl = (countries) => `http://api.worldbank.org/v2/country/${countries}/indicator/EN.ATM.CO2E.PC?format=json`;

const apiUrlRegion = (region) => {
  const url = `${apiUrl(region)}&date=2018&per_page=100`;
  return url;
};

const fetchRegionData = async (region) => {
  const data = await fetch(apiUrlRegion(region)).then((response) => response.json());
  return data;
};

const fetchCountryData = async (country) => {
  const data = await fetch(apiUrl(country)).then((response) => response.json());
  return data;
};

const fetchCo2Data = async (country) => {
  if (country.length === 2) {
    await fetchCountryData(country);
  }
  await fetchRegionData(country);
};

export default fetchCo2Data;
