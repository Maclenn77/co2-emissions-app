import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCo2DataApi } from '../redux/co2Emissions/co2Emissions';

const Region = ({ region }) => {
  const dispatch = useDispatch();
  const showCountries = () => {
    dispatch(getCo2DataApi(region.iso));
  };
  return (
    <div>
      <p>
        <Link to="/countries" onClick={showCountries}>
          Region:
          {region.label}
        </Link>
      </p>
      <p>
        Co2 per capita:
        {' '}
        {region.co2Emissions}
      </p>
    </div>
  );
};

export default Region;
