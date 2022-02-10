import React from 'react';
import { Link } from 'react-router-dom';
import ForwardIcon from '@material-ui/icons/ForwardOutlined';

const Country = ({ country }) => (
  <Link to={`/details/${country.iso}`}>
    <div className="p-2">
      <div className="arrow-icon">
        <ForwardIcon />
      </div>
      <h2>
        {country.label}
      </h2>
      <h6 className="co2">Co2:</h6>
      <p>
        {country.co2Emissions}
      </p>
    </div>
  </Link>
);

export default Country;
