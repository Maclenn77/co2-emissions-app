import React from 'react';
import { Link } from 'react-router-dom';
import ForwardIcon from '@material-ui/icons/ForwardOutlined';
import PropTypes from 'prop-types';

const Region = ({ region }) => (
  <Link to={`/countries/${region.iso}`}>
    <div className="p-2">
      <div className="arrow-icon">
        <ForwardIcon />
      </div>
      <h2>
        {region.label}
      </h2>
      <h6 className="co2">CO<sub>2</sub>:</h6>
      <p>
        {region.co2Emissions}
      </p>
    </div>
  </Link>
);

Region.propTypes = {
  region: PropTypes.shape({
    iso: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    co2Emissions: PropTypes.number.isRequired,
  }).isRequired,
};

export default Region;
