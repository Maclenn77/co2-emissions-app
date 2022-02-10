import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => (
  <Link to={`/details/${country.iso}`}>
    <div className="p-2">
      <h2>
        {country.label}
      </h2>
      <p>
        {country.co2Emissions}
      </p>
    </div>
  </Link>
);

export default Country;
