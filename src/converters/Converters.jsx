import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import WeightConverter from "./Weight";

import "./styles/Converter.css";

export default function Converters() {

	return (

		<container className="converters-main">
			<div className="converters-container">
				<h1>Converters</h1>
				<CardDeck className="card-deck">

				<Card className="card">
					<Card.Body className="card-info">

						<Card.Title className="card-info"><WeightConverter /></Card.Title>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Body className="card-info">
						<a href="/Length">
						<Card.Img className="card-img" variant="top"  />
							</a>
						<Card.Title className="card-info">Length Converter</Card.Title>

				  </Card.Body>
				</Card>

				<Card className="card">
					<Card.Body className="card-info">
						<a href="/Temperature">
						<Card.Img className="card-img" variant="top"  />
							</a>
						<Card.Title className="card-info">Temperature Converter</Card.Title>

					</Card.Body>
				</Card>
				</CardDeck>
			</div>
			</container>

		)
	}
