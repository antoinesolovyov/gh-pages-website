import React, { useState, useEffect } from "react";

import "./Weather.css";

const WEATHER_API_KEY = "7cd1581792cb7fa3710cd45312c6415e";

const Weather = () => {
  const [main, setMain] = useState("0");
  const [name, setName] = useState("City");
  const [units, setUnits] = useState("metric");
  const [unitsSymbol, setUnitsSymbol] = useState("C");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const url =
        `https://api.openweathermap.org/data/2.5/weather?` +
        `lat=${position.coords.latitude}&` +
        `lon=${position.coords.longitude}&` +
        `units=${units}&` +
        `appid=${WEATHER_API_KEY}`;

      fetch(url)
        .then(response => response.json())
        .then(json => {
          setMain(json.main);
          setName(json.name);
        });
    });
  }, [units]);

  const unitsOnClick = () => {
    if (units === "metric") {
      setUnits("imperial");
      setUnitsSymbol("F");
    } else if (units === "imperial") {
      setUnits("standart");
      setUnitsSymbol("K");
    } else {
      setUnits("metric");
      setUnitsSymbol("C");
    }
  };

  return (
    <section>
      <p className="weather">
        {`${name}: ${main.temp}˚`}
        <span onClick={unitsOnClick}>{unitsSymbol}</span>
      </p>
    </section>
  );
};

export default Weather;
