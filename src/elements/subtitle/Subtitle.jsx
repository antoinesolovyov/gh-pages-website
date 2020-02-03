import React from "react";

import "./Subtitle.css";

function Subtitle(props) {
  return <h2 id={props.anchor}>{props.text}</h2>;
}

export default Subtitle;
