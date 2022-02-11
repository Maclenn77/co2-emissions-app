import React from 'react';
import './info.css';

const Info = () => (
  <main className="info">
    <h1 className="info">Co2 Emissions: Why Do They Matter?</h1>
    <p className="intro info">
      Carbon dioxide emissions are the primary driver of global climate change.
      It’s widely recognised that to avoid the worst impacts of climate change,
      the world needs to urgently reduce emissions.
    </p>
    <h2 className="info">What are Co2 Emissions?</h2>
    <p className="info">
      Carbon dioxide emissions are those stemming from the burning of fossil fuels
      and the manufacture of cement. They include carbon dioxide produced during consumption
      of solid, liquid, and gas fuels and gas flaring.
    </p>
    <h2 className="info">Why is important to measure Co2 Emissions?</h2>
    <p className="info">
      To prevent severe climate change we need to rapidly reduce global greenhouse gas emissions.
      The world emits around 50 billion tonnes of greenhouse gases each year [measured in carbon
      dioxide equivalents (CO2eq)].1
      {' '}
    </p>
    <p className="info">
      To figure out how we can most effectively reduce emissions and what emissions can and
      can’t be eliminated with current technologies, we need to first understand where our
      emissions come from.
    </p>
    <h3>References</h3>
    <ul>
      <li>
        <em>CO2 emissions</em>
        , by Hannah Ritchie and Max Roser
      </li>
      <li>
        <em>Metadata Glossary</em>
        , by The World Bank.
      </li>
      <li>
        <em>Emissions by sector</em>
        {' '}
        by Hannah Ritchie and Max Roser
      </li>
    </ul>
  </main>
);

export default Info;
