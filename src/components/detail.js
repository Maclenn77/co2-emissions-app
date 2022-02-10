import React from 'react';

const Detail = ({ year }) => (
  <div>
    <p key={year.id}>
      {year.date}
      :
      {' '}
      {year.co2Emissions}
    </p>
  </div>
);

export default Detail;
