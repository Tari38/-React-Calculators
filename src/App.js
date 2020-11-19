import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navs/Nav";
import Home from "./components/Home";
import Calculator from "./basic-calculator/Calculator";
import BmiCalculator from "./bmi-calculator/BmiCalculator";
import Converters from "./converters/Converters";
import LengthConverter from "./converters/Length";
import WeightConverter from "./converters/Weight";
import TemperatureConverter from "./converters/Temperature";
import Footer from "./components/partials/Footer.jsx";

import "./App.css";

function App() {

return (

  <Router>
  <NavBar />
  <div className="App">

    <div className="App container mt-2" style={{ marginTop: 40 }}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components/Home">
          <Home />
        </Route>
        <Route path="/basic-calculator/Calculator">
          <Calculator />
        </Route>
        <Route path="/bmi-calculator/BmiCalculator">
          <BmiCalculator />
        </Route>
        <Route path="/converters/Converters">
          <Converters />
        </Route>
        <Route path="/Length">
          <LengthConverter />
        </Route>
        <Route path="/Weight">
          <WeightConverter />
        </Route>
        <Route path="/Temperature">
          <TemperatureConverter />
        </Route>

      </Switch>
      </div>
      </div>
      <Footer />
  </Router>

);
}

export default App;
