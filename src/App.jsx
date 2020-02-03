import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";

const App = () => {
  useEffect(() => {
    document.body.className = "black";
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
