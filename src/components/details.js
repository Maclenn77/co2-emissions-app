import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
    const details = useSelector((state) => state.co2Emissions);
    const country = {
        name: details[0].label,
    };

    return (
      <div>
          <h2>{country.name}</h2>
          {details.map((year) => (
              <p key={year.id}>{year.date}: {year.co2Emissions}</p>
          ))}
      </div>
    );
}

export default Details;