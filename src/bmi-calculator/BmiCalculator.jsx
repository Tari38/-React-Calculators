import React from "react";
import "./BmiCalculator.css";

import Form from "./components/Form";

export default function BmiCalculator() {

	return (

		<container className="bmi-main">
			<h1>BMI Calculator</h1>
		<div className="bmi-form-container">
			<Form />
			</div>
		</container>
	)
}
