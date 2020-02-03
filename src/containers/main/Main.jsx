import React from "react";
import { Route, Link } from "react-router-dom";

import "./Main.css";

import Articles from "../../components/articles/Articles";
import Posts from "../../components/posts/Posts";
import Weather from "../../components/weather/Weather";
import ExchangeRates from "../../components/exchangeRates/ExchangeRates";

const Main = () => {
  return (
    <main>
      <Posts />
      <Route path="/" exact>
        <Link to="/articles">articles</Link>
        <br/>
        <Link to="/weather">weather</Link>
        <br/>
        <Link to="/exchange_rates">exchange-rate</Link>
      </Route>
      <Route path="/articles" exact component={Articles} />
      <Route path="/weather" component={Weather} />
      <Route path="/exchange_rates" component={ExchangeRates} />
    </main>
  );
};

export default Main;
