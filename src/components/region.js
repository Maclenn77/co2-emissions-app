import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesDataApi } from '../redux/countries/countries';

const Region = ({ region }) => {
  const dispatch = useDispatch();
  const showCountries = () => {
    dispatch(getCountriesDataApi(region.iso));
  };
  return (
    <Link to={`/countries/${region.iso}`} onClick={showCountries}>
      <div className="p-2">
        <h2>
          {region.label}
        </h2>
        <p>
          {region.co2Emissions}
        </p>
      </div>
    </Link>
  );
};

export default Region;
