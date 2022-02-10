import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Country from './country';
// import Region from './region';
const Countries = () => {
  const countriesData = useSelector((state) => state.countries);
  const { region } = useParams();
  const regionData = useSelector((state) => state.co2Emissions.filter((data) => data.iso === region));
  return (
    <main>
      <h1>{regionData[0].label}</h1>
    <div>
      {countriesData.map((country) => (
        <Country key={country.iso} country={country} />
      ))}
    </div>
    </main>
  );
};

export default Countries;
