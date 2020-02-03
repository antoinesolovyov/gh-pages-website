import React from "react";

import "./Footer.css";
import Weather from "../../components/weather/Weather";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://twitter.com/antoinesolovyov">Twitter</a>
        {" • "}
        <a href="https://www.instagram.com/antoinesolovyov/">Instagram</a>
        {" • "}
        <a href="https://github.com/antoinesolovyov/">GitHub</a>
      </div>

      <Weather />
    </footer>
  );
};

export default Footer;
