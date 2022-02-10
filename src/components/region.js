import React from 'react';
import { Link } from 'react-router-dom';

const Region = ({ region }) => (
  <Link to={`/countries/${region.iso}`}>
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

export default Region;
