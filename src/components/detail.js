import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ year }) => (
  <div className="d-flex justify-content-between">
    <div>
      <p key={year.id}>
        {year.date}
        :
      </p>
    </div>
    <div>
      <p>
        {year.co2Emissions}
      </p>
    </div>
  </div>
);

Detail.propTypes = {
  year: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    co2Emissions: PropTypes.number.isRequired,
  }).isRequired,
};

export default Detail;
