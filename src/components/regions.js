import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Region from './region';
import { getCo2DataApi } from '../redux/co2Emissions/co2Emissions';

const Regions = () => {
  const regionsData = useSelector((state) => state.co2Emissions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCo2DataApi(''));
  }, []);

  return (

    <div>
      <h2>CO2 Emissions (metric tons per capita)</h2>
      {regionsData.map((region) => (
        <Region key={region.iso} region={region} />
      ))}
    </div>
  );
};
export default Regions;
