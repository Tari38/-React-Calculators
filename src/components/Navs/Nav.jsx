import React from "react";
import { DropdownButton, Navbar, Nav } from 'react-bootstrap';

import "./Nav.css";

function NavBar() {

  return (

      <Navbar expand="md" className="navbar">
        <Navbar.Brand className="nav-brand">Calculators</Navbar.Brand>
        <DropdownButton id="dropdown-item-button" title="Apps"></DropdownButton>

            <Nav.Link className="navlink" href="/components/Home" >Home</Nav.Link>
            <Nav.Link className="navlink" href="/basic-calculator/Calculator" >Calculator</Nav.Link>
            <Nav.Link className="navlink" href="/bmi-calculator/BmiCalculator" >Bmi Calculator</Nav.Link>
            <Nav.Link className="navlink" href="/scientific-calculator/ScientificCalculator" >Scientific Calculator</Nav.Link>
      
      </Navbar>

  )
}

export default NavBar;
