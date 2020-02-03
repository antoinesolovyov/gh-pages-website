import React from "react";

import "./Image.css";

function Image(props) {
  return <img src={props.url} alt={props.alt} />;
}

export default Image;
