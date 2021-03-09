import React, { useState } from "react";

import "./styles/Weight.css";

export default function WeightConverter() {

    const [input, setInput] = useState("");
	  const [pound, setPound] = useState();


		function handleChange(e) {
	    setInput(e.target.value);
	  }

	  function toPounds() {
	    if (input === "") {
	      return;
	    }
	    const poundVal = input * 2.2046;
	    setInput("")
	    setPound(poundVal)
	  }

  return (
    <container className="weight-main">
			 <div className="weight-container">
				<h1>Weight Converter </h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							name="weight"
		          type="number"
		          value={input}
							onChange={handleChange}
							className="weight-input"
							placeholder="Enter value in kg"
						/>
						<div className="buttons">
							<button onClick={toPounds} className="btn-pounds">Convert to lbs</button>
						</div>
					</form>
		      <p>{pound ? `Pounds: ${pound}` : null}</p>

			 </div>
    </container>
 )
}
