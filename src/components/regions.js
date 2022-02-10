import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Region from './region';
import { getCo2DataApi } from '../redux/co2Emissions/co2Emissions';
import './regions.css';
import logo from '../logo512.png';
import { pickColor } from '../view/handler';

const Regions = () => {
  const regionsData = useSelector((state) => state.co2Emissions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCo2DataApi(''));
  }, []);

  return (

    <main>
      <div className="home">
        <img src={logo} />
        <div className="title">
          <h1>CO2 Emissions around the world</h1>
          <p>
            (Metric tons per capita)
          </p>
        </div>
      </div>
      <section className="container">
        <div className="stats row">
          <h3>STATS BY REGION </h3>
        </div>
        <div className="row">
          {regionsData.map((region) => (
            <div className={pickColor(regionsData.indexOf(region))}>
              <Region key={region.iso} region={region} className="region" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Regions;
