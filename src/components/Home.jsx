import React from "react";

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import CalcImg from "./images/basic-calc.png";

import "./Home.css";

export default function Home() {

  return(
    <container className="home-main">
    <h1>All the Apps </h1>
    <CardDeck className="card-deck">
    <Card className="card">
      <Card.Body className="card-info">
        <a href="/basic-calculator/Calculator"><Card.Img className="card-img" variant="top" src={CalcImg} /></a>
        <Card.Title className="card-info">A Basic Calculator</Card.Title>
      </Card.Body>
    </Card>

    <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body className="card-info">
        <Card.Title className="card-info">A BMI Calculator</Card.Title>
          <Card.Text className="card-info">
            Find out your BMI with this handy app.
          </Card.Text>
      </Card.Body>
    </Card>

    <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body className="card-info">
        <Card.Title className="card-info">Calculator 2.0</Card.Title>
          <Card.Text className="card-info">
            Scientific Calculator.
          </Card.Text>
      </Card.Body>
    </Card>

    </CardDeck>
    </container>

  )
}
