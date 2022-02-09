import React from 'react';
import { useSelector } from 'react-redux';
import Country from './country';

const Countries = () => {
  const regionsData = useSelector((state) => state.co2Emissions);

  return (
    <div>
      {regionsData.map((country) => (
        <Country key={country.iso} country={country} />
      ))}
    </div>
  );
};

export default Countries;
