import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Country from './country';
import Region from './region';
import { pickColor } from '../view/handler';
import { getCountriesDataApi } from '../redux/countries/countries';

const Countries = () => {
  const { region } = useParams();
  const dispatch = useDispatch();

  const countriesData = useSelector((state) => state.countries);

  const [filteredData, setFilteredData] = useState([]);

  let regionData = useSelector((state) => state.co2Emissions.filter((data) => data.iso === region));
  regionData = regionData[0];

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = countriesData.filter((value) => value.label.toLowerCase().includes(searchWord.toLowerCase()));
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    dispatch(getCountriesDataApi(region));
  }, []);

  return (
    <main>
      <div className="header">
        <Region key={regionData.iso} region={regionData} />
      </div>
      <section className="container">
        <div className='searchInputs col-12'>
        <input type="text" placeholder="Enter Country's name" onChange={handleFilter} />
        </div>
        <div className="stats row">
          <h3>STATS BY COUNTRY </h3>
        </div>
        {filteredData.length === 0 && (
        <div className="row">

          {countriesData.map((country) => (
            <div className={pickColor(countriesData.indexOf(country))}>
              <Country key={country.iso} country={country} />
            </div>
          ))}

        </div>
        )}
        {filteredData.length !== 0 && (
        <div className="row">
          {filteredData.map((country) => (
            <div className={pickColor(countriesData.indexOf(country))}>
              <Country key={country.iso} country={country} />
            </div>
          ))}
        </div>
        )}
      </section>
    </main>
  );
};

export default Countries;
