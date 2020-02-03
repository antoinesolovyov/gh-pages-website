import React, { useState, useEffect } from "react";

import Element from "./Element";

const ExchangeRates = () => {
  const [values, setValues] = useState([0, 0]);
  const [selects, setSelects] = useState([26, 4]);

  const [rates, setRates] = useState([]);

  useEffect(() => {
    const url = `https://www.nbrb.by/api/exrates/rates?periodicity=0`;

    fetch(url)
      .then(response => response.json())
      .then(array => {
        array.push({
          Cur_ID: 100,
          Date: new Date().toISOString(),
          Cur_Abbreviation: "BYN",
          Cur_Scale: 1,
          Cur_Name: "Белорусский рубль",
          Cur_OfficialRate: 1
        });
        setRates(array);
        console.log(array);
      });
  }, []);

  const inputOnChange = (name, value) => {
    if (name === "first") {
      setValues([value, convert(value, rates[selects[0]], rates[selects[1]])]);
    } else {
      setValues([convert(value, rates[selects[1]], rates[selects[0]]), value]);
    }
  };

  const selectOnChange = (name, select) => {
    if (name === "first") {
      setSelects([select, selects[1]]);
      setValues([
        values[0],
        convert(values[0], rates[select], rates[selects[1]])
      ]);
    } else {
      setSelects([selects[0], select]);
      setValues([
        convert(values[1], rates[select], rates[selects[0]]),
        values[1]
      ]);
    }
  };

  function convert(money, curr, next) {
    return (
      (money * curr.Cur_OfficialRate) /
      next.Cur_OfficialRate /
      (curr.Cur_Scale / next.Cur_Scale)
    ).toFixed(2);
  }

  return (
    <section>
      <Element
        name="first"
        value={values[0]}
        select={selects[0]}
        rates={rates}
        inputOnChange={inputOnChange}
        selectOnChange={selectOnChange}
      />

      <Element
        name="second"
        value={values[1]}
        select={selects[1]}
        rates={rates}
        inputOnChange={inputOnChange}
        selectOnChange={selectOnChange}
      />
    </section>
  );
};

export default ExchangeRates;
