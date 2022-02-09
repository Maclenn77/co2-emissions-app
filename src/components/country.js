import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCo2CountryApi } from '../redux/co2Emissions/co2Emissions';

const Country = ({ country }) => {
  const dispatch = useDispatch();
  const showDetails = () => {
    dispatch(getCo2CountryApi(country.iso));
  };

  return (
    <div>
      <p>
        <Link to="/details" onClick={showDetails}>
          Country:
          {' '}
          {country.label}
        </Link>
      </p>
      <p>
        Co2 per capita:
        {country.co2Emissions}
      </p>
    </div>
  );
};

export default Country;
