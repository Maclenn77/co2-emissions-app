import React from 'react';

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

export default Detail;
