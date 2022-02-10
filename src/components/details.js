import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Detail from './detail';
import Country from './country';
import { getCo2Details } from '../redux/details/details';
import { pick2Color } from '../view/handler';

const Details = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCo2Details(country));
  }, []);

  const details = useSelector((state) => state.details);

  let countryiso = useSelector((state) => state.countries.filter((data) => data.iso === country));

  countryiso = countryiso[0];

  return (
    <main>
      <div className="header">
        <Country key={countryiso.iso} country={countryiso} />
      </div>
      <section className="container">
        <div className="stats row">
          <h3>STATS BY YEAR </h3>
        </div>
        <div className="row">
          {details.map((year) => (
            <div className={pick2Color(details.indexOf(year))}>
              <Detail key={year.id} year={year} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Details;
