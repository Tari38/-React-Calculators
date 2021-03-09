import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import "./styles/Temperature.css";

export default function TemperatureConverter() {

	const [celsius, setCelsius] = useState("Celsius");
	const [fahrenheit, setFahrenheit] = useState("fahrenheit");

  const updateCelsius = event => {
    setCelsius(event.target.value);
    setFahrenheit(event.target.value * 9/5+32);
  };

	const updateFahrenheit = event => {
		setFahrenheit(event.target.value);
		setCelsius(event.target.value / 9*5-32);
	};

	useEffect(() => {
    console.log("celsius", celsius)
    console.log("fahrenheit", fahrenheit);
  }, [celsius, fahrenheit]);


  return (
		<container className="temp-main">
    <div className="temp-container">
      <h1>Temperature Conversion</h1>
			<div className="field-container">
        <TextField
          value={celsius}
          onChange={updateCelsius}
          id="outlined-number1"
          label="Celsius"
          type="number"
          InputLabelProps={{
            shrink: true
        }}
        variant="filled"
        />
			<p> is Equal to </p>
			<TextField
				value={fahrenheit}
				onChange={updateFahrenheit}
				id="outlined-number2"
				label="Fahrenheit"
				type="number"
				InputLabelProps={{
					shrink: true
				}}
				variant="filled"
			/>
		 </div>
    </div>
		</container>
  )
}
