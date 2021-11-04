import React, {useContext} from 'react';
import './WeatherDetail.css';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import iconMapper from "../../helpers/iconMapper";
import {TempContext} from "../../context/TempContextProvider";

function WeatherDetail({temp,type,description}) {

    const {kelvinToMetric} = useContext(TempContext);

  return (
    <section className="day-part">
      <span className="icon-wrapper">
        {iconMapper(type)}
      </span>
      <p className="description">{description}</p>
      <p>{kelvinToMetric(temp)}</p>
    </section>
  );
}

export default WeatherDetail;
