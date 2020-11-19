import React from "react";

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import CalcImg from "./images/basic-calc.png";
import BmiImg from "./images/bmi-calc.png";

import "./Home.css";

export default function Home() {

  return(
    <container className="home-main">
    <h1>All the Apps </h1>
    <CardDeck className="card-deck">
    <Card className="card">
      <Card.Body className="card-info">
        <a href="/basic-calculator/Calculator">
        <Card.Img className="card-img" variant="top" src={CalcImg} />
        </a>
        <Card.Title className="card-info">A Basic Calculator</Card.Title>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body className="card-info">
        <a href="/bmi-calculator/BmiCalculator">
        <Card.Img className="card-img" variant="top" src={BmiImg} />
        </a>
        <Card.Title className="card-info">A BMI Calculator</Card.Title>
          <Card.Text className="card-info">
            Find out your BMI with this handy app.
          </Card.Text>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body className="card-info">
      <a href="/converters/Converters">
      <Card.Img className="card-img" variant="top" />
      </a>
        <Card.Title className="card-info">Converters</Card.Title>
          <Card.Text className="card-info">
            A variety of converter calculators.
          </Card.Text>
      </Card.Body>
    </Card>

    </CardDeck>
    </container>

  )
}
