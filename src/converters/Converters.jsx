import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import WeightConverter from "./Weight";
import LengthConverter from "./Length";
import TemperatureConverter from "./Temperature";

import "./styles/Converters.css";

export default function Converters() {

	return (

		<container className="converters-main">
			<h1>Converters</h1>
				<CardDeck className="card-deck">
						<Card className="card">
							<Card.Body className="card-info">
								<WeightConverter />
							</Card.Body>
						</Card>

						<Card className="card">
							<Card.Body className="card-info">
								<LengthConverter />
							</Card.Body>
						</Card>

						<Card className="card">
							<Card.Body className="card-info">
							  <TemperatureConverter />
							</Card.Body>
						</Card>
				</CardDeck>
		</container>


		)
	}
