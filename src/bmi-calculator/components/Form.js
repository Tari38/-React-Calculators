import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from "./Button";

import "./styles/Form.css";

const Form = () => {

	const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

 const computeBmi = () => {
	 let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
	 setBmi(bmiValue);
	 let bmiClass = getBmi(bmiValue);
	 setBmiClass(bmiClass);
	 setHeight("")
	 setWeight("")
 };

const getBmi = (bmi) => {
    if(bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        return "Your BMI is " + bmi + ", so you are a healthy weight";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "Your BMI is " + bmi + ", so you are overweight";
    }
    if(bmi >= 30) {
        return "Your BMI is " + bmi + ", so you are obese";
    }
}

      return (
				<div className="App">
			    <div className="container">
			      <div
			        style={{
			          display: "block",
			          width: "50%",
			          margin: "0 auto",
			          padding: "20px",
			          boxSizing: "border-box",
			        }}
			      >
			      </div>
			      <div className="row">
			        <TextInput
			          label="Height"
			          placeholder="Enter height in cm"
			          handleChange={handleHeightChange}
			          value={height}
			        />
			      </div>
			      <div className="row">
			        <TextInput
			          label="Weight"
			          placeholder="Enter weight in kg"
			          handleChange={handleWeightChange}
			          value={weight}

			        />

			      </div>
			      <div className="row">
			        <Button label="CALCULATE" onClick={computeBmi} />
			      </div>
			      <div className="row">
			        {
			          isNaN(bmi)?null:<h3>Your BMI = {bmi}</h3>
			        }

			      </div>
			      <div className="row">
			        <h3>{bmiClass}</h3>
			      </div>
			    </div>
			    </div>
			  );
			};


export default Form;
