import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCo2DataApi } from '../redux/co2Emissions/co2Emissions';

const Countries = (region) => {
  const regionsData = useSelector((state) => state.co2Emissions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCo2DataApi(region));
  }, []);

  return (
    <div>
      {regionsData.map((region) => (
        <p key={region.iso}>{region.label}</p>
      ))}
    </div>
  );
};

export default Countries;
