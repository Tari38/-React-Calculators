import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";

import "./styles/Length.css";

export default function Length() {
  const [cm, setCM] = useState("");
  const [inches, setInches] = useState("");
  const [feet, setFeet] = useState("");

  const updateFeet = event => {
    setFeet(event.target.value);
    setInches(event.target.value * 12.000);
  };

  const updateInches = event => {
    setInches(event.target.value);
    setCM(event.target.value * 2.54);
  };

  const updateCM = event => {
    setCM(event.target.value);
    setInches(event.target.value / 2.54);
    // setFeet(event.target.value * 0.032808);
  };

  useEffect(() => {
    console.log("feet", feet)
    console.log("inches", inches);
    console.log("cm", cm);

  }, [feet, inches, cm]);

  return (

    <div className="converter-container">
    <h1>Length Converter</h1>
    <h3>Imperial to Metric</h3>
      <div className="field-container">
        <TextField
          value={feet}
          onChange={updateFeet}
          id="outlined-number1"
          label="Feet"
          type="number"
          InputLabelProps={{
            shrink: true
        }}
        variant="outlined"
        />
        <p> is Equal to </p>
        <TextField
          value={inches}
          onChange={updateInches}
          id="outlined-number2"
          label="Inches"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
       </div>

      <div>
        <p> then Converts to </p>
      </div>
      <div>
        <TextField
          value={cm}
          onChange={updateCM}
          id="outlined-number3"
          label="Centimeters"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
      </div>
    </div>

  );
}
