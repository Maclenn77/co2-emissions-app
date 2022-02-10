import React from 'react';
import { Link } from 'react-router-dom';
import ForwardIcon from '@material-ui/icons/ForwardOutlined';

const Region = ({ region }) => (
  <Link to={`/countries/${region.iso}`}>
    <div className="p-2">
      <div className="arrow-icon">
        <ForwardIcon />
      </div>
      <h2>
        {region.label}
      </h2>
      <h6 className="co2">Co2:</h6>
      <p>
        {region.co2Emissions}
      </p>
    </div>
  </Link>
);

export default Region;
