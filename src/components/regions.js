import React, { useState } from 'react';
import { useStore } from 'react-redux';

const Regions = () => {
  const regions = useState();
  return (
    <div>
      <p>{regions[1].value}</p>
    </div>
  );
};

export default Regions;
