import React from "react";

import "./Element.css";

const Element = props => {

  const selectOnChange = event => {
    props.selectOnChange(props.name, event.target.value);
  };

  const inputOnChange = event => {
    props.inputOnChange(props.name, event.target.value);
  };

  function getOptions() {
    return props.rates.map((rate, index) => (
      <option key={index} value={index}>
        {rate.Cur_Abbreviation}
      </option>
    ));
  }

  return (
    <div className="exchange-rates">
      <input type="number" value={props.value} onChange={inputOnChange} />
      <select onChange={selectOnChange} value={props.select}>
        {getOptions()}
      </select>
    </div>
  );
};

export default Element;
