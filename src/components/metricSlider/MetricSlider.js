import React, {useContext, useEffect, useState} from 'react';
import './MetricSlider.css';
import {TempContext} from "../../context/TempContextProvider";

function MetricSlider() {
    const[checked, toggleChecked] = useState(true);

    const {toggleTemp} = useContext(TempContext);

    useEffect(() => {
        toggleTemp();
    },[checked]);

  return (
    <div className="weather-container-extention">
      Weergeven in

      <p className="switch-label">
        C &deg;
      </p>

      <span className="switch-wrapper">
        <input
          type="checkbox"
          className="switch"
          id="metric-system"
          checked={checked}
          onChange={()=> toggleChecked(!checked)}
        />

        <label
          htmlFor="metric-system"
          className="switch-btn"
        />
      </span>

      <p className="switch-label">
        &deg; F
      </p>
    </div>
  );
}

export default MetricSlider;
