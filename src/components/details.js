import React from "react";
import { useSelector } from "react-redux";
import Detail from "./detail";

const Details = () => {
    const details = useSelector((state) => state.co2Emissions);
    const country = {
        name: details[0].label,
    };

    return (
      <div>
          <h2>{country.name}</h2>
          {details.map((year) => (
              <Detail key={year.id} year={year} />
          ))};
      </div>
    );
}

export default Details;