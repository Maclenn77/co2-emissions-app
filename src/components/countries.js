import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Country from './country';
import Region from './region';
import { pickColor } from '../view/handler';
import { getCountriesDataApi } from '../redux/countries/countries';
import SearchBar from './searchBar';

const Countries = () => {
  const { region } = useParams();
  const dispatch = useDispatch();

  const countriesData = useSelector((state) => state.countries);

  let regionData = useSelector((state) => state.co2Emissions.filter((data) => data.iso === region));
  regionData = regionData[0];
  
  useEffect(() => {
    dispatch(getCountriesDataApi(region));
  }, []);

  return (
    <main>
      <div className="header">
        <Region key={regionData.iso} region={regionData} />
      </div>
      <section className="container">
        <div className="stats row">
          <SearchBar placeholder="Type a country's name" data={regionData} />
          <h3>STATS BY COUNTRY </h3>
        </div>
        <div className="row">
          {countriesData.map((country) => (
            <div className={pickColor(countriesData.indexOf(country))}>
              <Country key={country.iso} country={country} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Countries;
