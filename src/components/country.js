import React from 'react';
import { Link } from 'react-router-dom';
import ForwardIcon from '@material-ui/icons/ForwardOutlined';
import PropTypes from 'prop-types';

const Country = ({ country }) => (
  <Link to={`/details/${country.iso}`}>
    <div className="p-2">
      <div className="arrow-icon">
        <ForwardIcon />
      </div>
      <h2>
        {country.label}
      </h2>
      <h6 className="co2">CO<sub>2</sub>:</h6>
      <p>
        {country.co2Emissions}
      </p>
    </div>
  </Link>
);

Country.propTypes = {
  country: PropTypes.shape({
    iso: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    co2Emissions: PropTypes.number.isRequired,
  }).isRequired,
};

export default Country;
